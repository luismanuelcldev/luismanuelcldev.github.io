// filepath: /C:/Users/LUIS MANUEL/Documents/Development/portfolio/app/(root)/contact/page.tsx
import { useState } from 'react';
import FaqsSection from "@/components/FaqsSection";
import { socialLinks } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
    title: "Contacto - Luis Manuel De La Cruz L.",
    description: "Luis Manuel",
};

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/portfolio/pages/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            alert(result.message);
        } catch {
            alert('Error al enviar el formulario');
        }
    };

    return (
        <>
            <section className="max-width section-padding">
                <div className="box text-center flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded bg-blue flex items-center justify-center flex-shrink-0 mb-5">
                        <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35} />
                    </div>
                    <h2 className="text-grey-700">Contactame</h2>
                    <p className="text-grey-600">
                        ¡Si tienes alguna duda, sugerencia o simplemente quieres saludar, no dudes en contactarme.!
                    </p>
                </div>
            </section>

            <section className="max-width section-padding flex max-tablet:flex-col gap-16">
                <div className="tablet:max-w-md w-full">
                    <div className="space-y-4">
                        <div className="box !p-6">
                            <p className="text-grey-600">¡Puedes enviarme un correo electrónico aquí!</p>
                            <h6 className="text-grey-700">ledesmadelacruzluismanuel@gmail.com</h6>
                        </div>
                        <div className="box !p-6">
                            <p className="text-grey-600">Contacteme al</p>
                            <h6 className="text-grey-700">+1 (829) - 727 - 3392</h6>
                        </div>
                        <div className="box !p-6">
                            <p className="text-grey-600">Ubicación</p>
                            <h6 className="text-grey-700">La Vega, Republica Dominicana.</h6>
                        </div>
                    </div>
                    <h6 className="mt-10 mb-3 text-grey-700 max-tablet:text-center">
                        ¡Mis Redes Sociales!
                    </h6>
                    <div className="flex gap-3 box !p-6 w-max max-tablet:mx-auto">
                        {
                            socialLinks.map((link, index) => (
                                <a href={link.url}
                                    key={index}
                                    className="w-10 h-10 bg-blue  text-peach flex items-center justify-center rounded"
                                >
                                    <link.icon strokeWidth={0} fill="currentColor" />
                                </a>
                            ))}
                    </div>
                </div>
                <div className="box w-full">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="flex gap-5 max-tablet:flex-col">
                            <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} />
                            <input type="text" name="surname" placeholder="Apellido" value={formData.surname} onChange={handleChange} />
                        </div>
                        <div className="flex gap-5 max-tablet:flex-col">
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                            <input type="text" name="phone" placeholder="Telefono" value={formData.phone} onChange={handleChange} />
                        </div>
                        <textarea name="message" placeholder="Mensaje" className="min-h-[200px]" value={formData.message} onChange={handleChange}></textarea>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </section >

            <FaqsSection />
        </>
    );
};

export default Page;