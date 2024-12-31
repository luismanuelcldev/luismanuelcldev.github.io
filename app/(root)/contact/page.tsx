"use client";

import FaqsSection from "@/components/FaqsSection";
import { socialLinks } from "@/constants";
import Image from "next/image";
import React, { useEffect } from "react";

const Page = () => {
    useEffect(() => {
        document.title = "Contacto - Luis Manuel De La Cruz L.";
    }, []);

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
                    <form action="" className="space-y-5">
                        <div className="flex gap-5 max-tablet:flex-col">
                            <input type="text" placeholder="Nombre" />
                            <input type="text" placeholder="Apellido" />
                        </div>
                        <div className="flex gap-5 max-tablet:flex-col">
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Telefono" />
                        </div>
                        <textarea placeholder="Mensaje" className="min-h-[200px]"></textarea>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </section >

            <FaqsSection />
        </>
    );
};

export default Page;