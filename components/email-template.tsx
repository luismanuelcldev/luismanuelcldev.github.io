import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    surname: string;
    email: string;
    phone: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    surname,
    email,
    phone,
    message,
}) => (
    <div>
        <h1>Nuevo mensaje de {name} {surname}</h1>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Teléfono:</strong> {phone}</p>
        <p><strong>Mensaje:</strong> {message}</p>
    </div>
);