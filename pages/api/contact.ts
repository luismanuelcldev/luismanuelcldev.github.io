import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import { EmailTemplate } from '@/components/email-template';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, surname, email, phone, message } = req.body;

        try {
            const { data, error } = await resend.emails.send({
                from: 'ledesmadelacruzluismanuel@gmail.com',
                to: ['ledesmadelacruzluismanuel@gmail.com'],
                subject: `Nuevo mensaje de ${name} ${surname}`,
                react: EmailTemplate({ name, surname, email, phone, message }),
            });

            if (error) {
                return res.status(400).json(error);
            }

            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error al enviar el correo', error });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}