import { NextResponse } from 'next/server';

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('file');

  // Ajoutez ici la logique d'upload du fichier CNI/Passport
  // Retourner une réponse
  return NextResponse.json({ success: true, fileUrl: 'https://drive.google.com/your-uploaded-file' });
}
 