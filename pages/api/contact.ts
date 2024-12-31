// filepath: /C:/Users/LUIS MANUEL/Documents/Development/portfolio/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.API_KEY_EMAIL);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, surname, email, phone, message } = req.body;

        const emailData = {
            from: 'ledesmadelacruzluismanuel@gmail.com',
            to: 'ledesmadelacruzluismanuel@gmail.com',
            subject: `Nuevo mensaje de ${name} ${surname}`,
            html: `<h1>Nuevo mensaje de ${name} ${surname}</h1><p><strong>Email:</strong> ${email}</p><p><strong>Teléfono:</strong> ${phone}</p><p><strong>Mensaje:</strong> ${message}</p>`,
        };

        try {
            await resend.emails.send(emailData);
            res.status(200).json({ message: 'Correo enviado exitosamente' });
        } catch (error) {
            res.status(500).json({ message: 'Error al enviar el correo', error });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}