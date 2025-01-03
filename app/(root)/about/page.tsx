import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { timeline } from "@/constants";
import { education } from "@/constants";



export const metadata: Metadata = {
    title: "Acerca De - Luis Manuel De La Cruz L.",
};




const page = () => {
    return (
        <>
            <section className="max-width section-padding flex flex-col tablet:flex-row gap-20 items-center">
                <div className="relative w-full tablet:w-1/2 h-[calc(300px+20vw)] tablet:h-[600px]">
                    <Image
                        src="/images/about.png"
                        fill
                        alt="about img"
                        className="object-cover"
                    />
                </div>
                <div className="tablet:w-1/2">
                    <div className="space-y-3 max-tablet:text-center flex-col">
                        <p className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded tablet:w-max max-tablet:mx-auto">
                            ¡Espero que disfrutes de tu estancia!
                        </p>
                        <h1 className="text-grey-700">¡Hola! Soy Luis Manuel De La Cruz Ledesma</h1>
                        <p className="text-grey-600 text-justify">
                            Desarrollador De Software con amplios conocimientos y experiencia en Front-end, Back-end e Ingeniería de Software, cursando la etapa final de la carrera de Desarrollo de Aplicaciones Multiplataformas en el Centro de Tecnología y Educación Permanente de la Pontificia Universidad Católica Madre y Maestra (TEP PUCMM). Cuento con sólida experiencia en desarrollo Frontend y Backend, destacándome por mi capacidad de liderazgo, pensamiento analítico y resolución creativa de problemas.
                            Destaco por mi habilidad para trabajar eficientemente en equipos multidisciplinarios, adaptabilidad rápida a nuevas tecnologías y compromiso con el aprendizaje continuo. Mi comunicación efectiva y orientación al detalle me permiten traducir requisitos complejos en soluciones técnicas elegantes y escalables.

                        </p>
                    </div>

                    {/*stats*/}
                    <div className="bg-peach-400 rounded-;g tablet:rounded-none tablet:bg-transparent tablet:border-t-2 
                    tablet:border-b-2 tablet:border-blue w-full py-8 px-10 mt-14 tablet:mt-24 gap-12 flex flex-col tablet:flex-row">

                    </div>

                </div>
            </section>

            {/* Seccion de Educación y Certificaciones */}
            <section className="max-width section-padding">
                <SectionHeading
                    title="Educación y Certificaciones"
                    subtitle="Estos son algunos de los títulos y certificaciones que he obtenido a lo largo de mi carrera."
                />

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:translate-x-px
                tablet:before:mx-auto tablet:before:translate-x-0 before:h-full before:w-0.5 before:bg-blue before:opacity-30">
                    {education.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-between tablet:justify-normal tablet:odd:flex-row-reverse group"
                        >
                            <div
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-peach-400 shrink-0 tablet:order-1
                            tablet:group-odd:-translate-x-1/2 tablet:group-even:translate-x-1/2
                            group-first:before:absolute group-first:before:w-1. group-first:before:h-20 group-first:before:botton-full
                            group-first:before:bg-peach-600
                            group-last:before:absolute group-last:before:w-1 group-last:before:h-20 group-last:before:bottom-full
                            group-last:before:top-full group-last:before:bg-peach-600 "
                            >
                                <span className="w-3 h-3 bg-blue rounded-full"></span>
                            </div>
                            <div className="w-[calc(100%-4rem)] tablet:w-[calc(50%-2.5rem)] box !p-5 tablet:!p-8">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <h6 className="text-grey-700">{item.title}</h6>
                                    <p className="font-semibold text-blue">{item.duration}</p>
                                </div>
                                <div className="text-grey-600">
                                    <p>{item.description}</p>
                                </div>
                                <br />
                                <b><p className="text-grey-600">{item.location}</p></b>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Seccion de Experiencia Laboral  */}
            <section className="max-width section-padding">
                <SectionHeading
                    title="Experiencia Laboral"
                    subtitle="Estos son algunos de los hitos más importantes de mi carrera como desarrollador web."
                />

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:translate-x-px
                tablet:before:mx-auto tablet:before:translate-x-0 before:h-full before:w-0.5 before:bg-blue before:opacity-30 text-justify">
                    {timeline.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-between tablet:justify-normal tablet:odd:flex-row-reverse group"
                        >
                            <div
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-peach-400 shrink-0 tablet:order-1
                            tablet:group-odd:-translate-x-1/2 tablet:group-even:translate-x-1/2
                            group-first:before:absolute group-first:before:w-1. group-first:before:h-20 group-first:before:botton-full
                            group-first:before:bg-peach-600
                            group-last:before:absolute group-last:before:w-1 group-last:before:h-20 group-last:before:bottom-full
                            group-last:before:top-full group-last:before:bg-peach-600 "
                            >
                                <span className="w-3 h-3 bg-blue rounded-full"></span>
                            </div>
                            <div className="w-[calc(100%-4rem)] tablet:w-[calc(50%-2.5rem)] box !p-5 tablet:!p-8">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <h6 className="text-grey-700">{item.title}</h6>
                                    <p className="font-semibold text-blue">{item.duration}</p>
                                </div>
                                {Object.values(item.description).map((line, index) => (
                                    <p key={index} className="text-grey-600">{line}</p>
                                ))}
                                <br />
                                <b><p className="text-grey-600">{item.location}</p></b>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>


    );
};

export default page;