import { google } from 'googleapis';
import formidable from 'formidable';
import fs from 'fs';

// Désactiver le parsing automatique de body dans Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

// Configurer l'authentification Google Drive
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
const auth = new google.auth.GoogleAuth({
  keyFile: 'path-to-your-service-account-key.json', // Remplace par ton propre chemin vers la clé du compte de service
  scopes: SCOPES,
});

const drive = google.drive({ version: 'v3', auth });

// Fonction pour téléverser un fichier vers Google Drive
const uploadFileToDrive = async (filePath, fileName) => {
  const fileMetadata = { name: fileName };
  const media = {
    mimeType: 'application/octet-stream', // Adapté selon le type de fichier
    body: fs.createReadStream(filePath),
  };

  const response = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id',
  });
  return response.data.id;
};

// Gestionnaire de l'API pour l'upload
const handler = async (req, res) => {
  // Vérification de la méthode
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  // Parser le formulaire avec formidable
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: 'Form parsing error', error: err.message });
    }

    const file = files.file; // Fichier téléversé
    const filePath = file.filepath;
    const fileName = file.originalFilename;

    try {
      // Téléversement du fichier vers Google Drive
      const fileId = await uploadFileToDrive(filePath, fileName);

      // Supprimer le fichier temporaire après l'upload
      fs.unlinkSync(filePath);

      // Envoyer une réponse positive
      res.status(200).json({ message: 'File uploaded successfully', fileId });
    } catch (error) {
      res.status(500).json({ message: 'File upload failed', error: error.message });
    }
  });
};

export default handler;
