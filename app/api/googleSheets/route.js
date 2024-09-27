export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Méthode non autorisée' });
    }
  
    try {
      const data = req.body;
      console.log('Données reçues:', data);
  
      // Logique pour envoyer les données à Google Sheets ici
  
      // Exemple de succès
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Erreur lors de la soumission des données:', error);
      return res.status(500).json({ message: 'Erreur serveur, veuillez réessayer plus tard.' });
    }
  }
  