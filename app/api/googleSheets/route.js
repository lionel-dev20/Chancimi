export async function POST(req) {
  try {
    const data = await req.json(); // Utilise `req.json()` pour obtenir les données du corps de la requête
    console.log('Données reçues:', data);
  
    // Logique pour envoyer les données à Google Sheets ici
    // Par exemple, appeler l'API Google Sheets pour insérer des données
    
    // Exemple de succès
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la soumission des données:', error);
    return new Response(JSON.stringify({ message: 'Erreur serveur, veuillez réessayer plus tard.' }), { status: 500 });
  }
}

export function GET() {
  return new Response(JSON.stringify({ message: 'Méthode non autorisée' }), { status: 405 });
}
