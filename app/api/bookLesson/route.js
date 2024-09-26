import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/calendar.events'];
const calendar = google.calendar('v3');

const createEvent = async (auth, eventDetails) => {
  try {
    const response = await calendar.events.insert({
      auth,
      calendarId: 'primary',
      resource: eventDetails,
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de l\'événement:', error);
    throw new Error('Échec de la réservation.');
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, phoneNumber, neighborhood, date, time } = req.body;

    const eventDetails = {
      summary: `Cours pratique de conduite - ${fullName}`,
      description: `Rendez-vous pour un cours pratique avec ${fullName}, Téléphone: ${phoneNumber}, Quartier: ${neighborhood}`,
      start: {
        dateTime: `${date}T${time}:00`,
        timeZone: 'Europe/Paris',
      },
      end: {
        dateTime: `${date}T${parseInt(time.split(':')[0]) + 1}:${time.split(':')[1]}:00`,
        timeZone: 'Europe/Paris',
      },
      attendees: [{ email: 'agence.chancimmi@gmail.com' }],
    };

    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: 'googleCalendar.json', // Assurez-vous que ce chemin est correct
        scopes: SCOPES,
      });
      const authClient = await auth.getClient();
      const event = await createEvent(authClient, eventDetails);
      res.status(200).json({ success: true, event });
    } catch (error) {
      console.error('Error with Google Calendar API:', error); 
      res.status(500).json({ success: false, message: 'Erreur avec Google Calendar', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Seules les requêtes POST sont autorisées' });
  }
}
