import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/calendar.events'];
const calendar = google.calendar('v3');

// Fonction pour créer un événement sur Google Calendar
const createEvent = async (auth, eventDetails) => {
  try {
    const response = await calendar.events.insert({
      auth,
      calendarId: 'primary', // Vérifie que le calendrier existe encore
      resource: eventDetails,
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de l\'événement:', error);
    throw new Error('Échec de la réservation.');
  }
};

// Utilisation du nouveau système de configuration
export const dynamic = 'force-dynamic';

// API handler pour la création d'événements - Nouvelle manière d'exporter
export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, phoneNumber, neighborhood, date, time } = body;

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
      attendees: [{ email: 'agence.chancimmi@gmail.com' }], // Remplace par ton email
    };

    const auth = new google.auth.GoogleAuth({
      keyFile: 'googleCalendar.json', // Vérifie que ce fichier est présent et valide
      scopes: SCOPES,
    });

    const authClient = await auth.getClient();
    const event = await createEvent(authClient, eventDetails);

    return new Response(JSON.stringify({ success: true, event }), { status: 200 });
  } catch (error) {
    console.error('Erreur avec Google Calendar API:', error);
    return new Response(JSON.stringify({ success: false, message: 'Erreur avec Google Calendar', error: error.message }), { status: 500 });
  }
}

export function GET() {
  return new Response(JSON.stringify({ message: 'Seules les requêtes POST sont autorisées' }), { status: 405 });
}
