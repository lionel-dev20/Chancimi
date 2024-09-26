import { google } from 'googleapis';
import fs from 'fs';

// Désactiver le parsing automatique de body dans Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

const drive = google.drive({
  version: 'v3',
  auth: new google.auth.GoogleAuth({
    keyFile: 'path-to-your-service-account-key.json', // Chemin vers la clé du compte de service
    scopes: SCOPES,
  }),
});

const uploadFileToDrive = async (filePath, fileName) => {
  const fileMetadata = {
    name: fileName,
  };
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

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests are allowed' });
  }

  // Import dynamique de formidable

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).send({ message: 'Form parsing error' });
    }

    const file = files.file;
    const filePath = file.filepath;
    const fileName = file.originalFilename;

    try {
      // Téléversement du fichier vers Google Drive
      const fileId = await uploadFileToDrive(filePath, fileName);

      // Supprimer le fichier temporaire après l'upload
      fs.unlinkSync(filePath);

      res.status(200).send({ message: 'File uploaded successfully', fileId });
    } catch (error) {
      res.status(500).send({ message: 'File upload failed', error: error.message });
    }
  });
};

export default handler;
