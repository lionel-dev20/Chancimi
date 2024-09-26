import { google } from 'googleapis';

// Remplacer config obsolète par la nouvelle approche
export const dynamic = 'force-dynamic';  // Force le rendu dynamique si nécessaire

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
const drive = google.drive('v3');

// Fonction d'upload sur Google Drive
const uploadFileToDrive = async (auth, filePath, fileName) => {
  const fileMetadata = {
    name: fileName,
  };
  const media = {
    mimeType: 'application/octet-stream', // Assurez-vous que le type MIME est correct
    body: fs.createReadStream(filePath),
  };

  try {
    const response = await drive.files.create({
      auth,
      resource: fileMetadata,
      media: media,
      fields: 'id',
    });
    return response.data.id;
  } catch (error) {
    console.error('Erreur lors de l\'upload vers Google Drive:', error);
    throw new Error('Échec de l\'upload');
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Récupérez et traitez les fichiers du corps de la requête ici
    const { fullName, file } = req.body;

    // Créez une authentification OAuth2 avec la clé du compte de service
    const auth = new google.auth.GoogleAuth({
      keyFile: '/path-to-your-googleCalendar.json',  // Chemin vers votre fichier de clé
      scopes: SCOPES,
    });

    try {
      const authClient = await auth.getClient();
      const fileId = await uploadFileToDrive(authClient, file.path, file.name);
      res.status(200).json({ success: true, fileId });
    } catch (error) {
      console.error('Erreur avec Google Drive API:', error);
      res.status(500).json({ success: false, message: 'Erreur lors de l\'upload vers Google Drive', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Seules les requêtes POST sont autorisées' });
  }
}
