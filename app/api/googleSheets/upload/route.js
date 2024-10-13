import { google } from 'googleapis';
import fs from 'fs';  // Assure-toi que fs est importé

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

// Fonction POST pour gérer l'upload de fichiers
export async function POST(req) {
  try {
    // Récupère les données envoyées dans le corps de la requête
    const body = await req.json(); // Utilise req.json() pour les nouvelles API routes
    const { fullName, file } = body;

    // Créez une authentification OAuth2 avec la clé du compte de service
    const auth = new google.auth.GoogleAuth({
      keyFile: '/path-to-your-googleCalendar.json',  // Chemin vers votre fichier de clé
      scopes: SCOPES,
    });

    const authClient = await auth.getClient();
    const fileId = await uploadFileToDrive(authClient, file.path, file.name);

    // Retourne la réponse avec le succès et l'identifiant du fichier
    return new Response(JSON.stringify({ success: true, fileId }), { status: 200 });
  } catch (error) {
    console.error('Erreur avec Google Drive API:', error);
    return new Response(JSON.stringify({ success: false, message: 'Erreur lors de l\'upload vers Google Drive', error: error.message }), { status: 500 });
  }
}

// Gère les autres méthodes HTTP comme GET avec une réponse 405 (Méthode non autorisée)
export function GET() {
  return new Response(JSON.stringify({ message: 'Seules les requêtes POST sont autorisées' }), { status: 405 });
}
