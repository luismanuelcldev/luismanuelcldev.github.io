// filepath: /C:/Users/LUIS MANUEL/Documents/Development/portfolio/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import SparkPost from 'sparkpost';

const client = new SparkPost(process.env.SPARKPOST_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, surname, email, phone, message } = req.body;

        const emailData = {
            content: {
                from: 'ledesmadelacruzluismanuel@gmail.com', // Correo verificado en SparkPost
                subject: `Nuevo mensaje de ${name} ${surname}`,
                html: `<h1>Nuevo mensaje de ${name} ${surname}</h1><p><strong>Email:</strong> ${email}</p><p><strong>Teléfono:</strong> ${phone}</p><p><strong>Mensaje:</strong> ${message}</p>`,
            },
            recipients: [{ address: 'ledesmadelacruzluismanuel@gmail.com' }],
        };

        try {
            await client.transmissions.send(emailData);
            res.status(200).json({ message: 'Correo enviado con éxito' });
        } catch (error) {
            res.status(500).json({ message: 'Error al enviar el correo', error });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}