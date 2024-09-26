import { google } from "googleapis";

export async function POST(req) {
    const body = await req.json();  // Lire le corps de la requête

    try {
        // Authentification Google
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ]
        });

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        // Ajout de données dans Google Sheets
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:V1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        body.name,
                        body.email,
                        body.phone,
                        body.datedeNaissance,
                        body.villeDeNaissance,
                        body.profession,
                        body.nomDuPere,
                        body.nomDeLaMere,
                        body.villeDeresidence,
                        body.quartierderesidence,
                        body.coursDeFrancais,
                        body.coursDAnglais,
                        body.permisoption,
                        body.filecniPassport,
                        body.filephoto4x4
                    ]
                ]
            }
        });

        return new Response(JSON.stringify({ data: response.data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (e) {
        console.error(e);
        return new Response(JSON.stringify({ message: 'Something went wrong' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
