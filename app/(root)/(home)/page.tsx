import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import PortfolioItem from '@/components/PortfolioItem';
import { portfolios, skills } from '@/constants';
import FaqsSection from '@/components/FaqsSection';

const Page = () => {
    return (
        <>
            <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
                {/*lado izquierdo*/}
                <div className="tablet:w-2/3 mt-10 tablet:mt-0">
                    <div className="flex flex-col gap-3  items-center tablet:items-start max-w-2xl text-center tablet:text-left">
                        <p className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded"
                            data-aos="fade-down"
                        >
                            Hola
                        </p>
                        <h1 className="text-grey" data-aos="fade-down" data-aos-delay="100">¡Bienvenidos a mi portafolio!</h1>
                        <p className="text-grey-600 text-justify" data-aos="fade-down" data-aos-delay="200">
                            Mi nombre es Luis Manuel De La Cruz, estudiante en etapa final de la carrera de Desarrollo de Aplicaciones Multiplataformas en el Centro de Tecnología y Educación
                            Permanente de la Pontificia Universidad Católica Madre y Maestra (TEP PUCMM). Me caracteriza una profunda pasión por el aprendizaje continuo y
                            el trabajo con diversas tecnologías, especialmente aquellas que aportan soluciones prácticas a problemas del mundo real. Actualmente, me especializo en el
                            desarrollo backend utilizando Express.js y estoy incursionando en el desarrollo frontend con React (v18+). Además, disfruto compartir mis conocimientos
                            como mentor, guiando y asesorando a niños que inician en el fascinante mundo de la tecnología.
                        </p>

                    </div>
                    <div className="flex gap-5 mt-10 justify-center tablet:justify-start" data-aos="fade-left" data-aos-delay="300">
                        <Link href={"tel:+1 (829)-727-3392"} className="btn btn-primary">
                            <Phone />
                            Contacto ahora
                        </Link>
                        <Link href={"https://drive.google.com/drive/folders/1b0pKQIdWRzt9ajNj9zFbEcOy8x49I8Ll"} className="btn btn-primary">
                            CV
                        </Link>
                        <Link href={"/portfolio"} className="btn ">
                            Ver cartera de proyectos
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/*stats*/}
                    <div className="bg-peach-400 w-full py-8 px-10 rounded-l-lg mt-16 flex-wrap gap-12 hidded tablet:flex ">

                    </div>

                </div>
                {/*lado derecho*/}
                <div className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden" data-aos="fade-left" data-aos-delay="300">
                    <Image
                        src={"/images/hero.jpg"}
                        alt="hero"
                        fill
                        className="object-cover"
                    />
                </div>
            </section >
            {/* seccion  de skills */}
            <section className="max-width section-padding">
                <SectionHeading
                    title="Habilidades Creativas"
                    subtitle="Como desarrollador apasionado, combino creatividad y experiencia técnica para transformar ideas
                     en experiencias digitales cautivadoras, enfocándome en crear interfaces intuitivas y responsivas que generan un impacto positivo en cada proyecto."
                />

                {/* skills */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,
                1fr))] gap-3 tablet:gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="box flex flex-col items-center gap-5">
                            <div className="w-16 h-16 rounded bg-blue flex items-center justify-center flex-shrink-0 mb-2">
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    width={35}
                                    height={35}
                                />
                            </div>
                            <div>
                                <div className="text-center">
                                    <h4 className="text-grey-700 mb-2">{skill.name}</h4>
                                    <p className="text-grey-600 text-justify">{skill.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            { /* Portfolio section */}
            <section className="section-padding max-width">
                <SectionHeading
                    title="Mis proyectos recientes"
                    subtitle="Aquí encontrarás una lista de algunos de los proyectos en los que he trabajado."
                />

                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,
                1fr))] gap-3 tablet:gap-6">
                    {portfolios.slice(0, 3).map((portfolio, index) => (
                        <PortfolioItem key={index} portfolio={portfolio} />
                    ))}
                </div>

                <Link href={"/portfolio"} className="btn btn-primary mt-10 mx-auto w-max">
                    Ver todos los proyectos
                </Link>
            </section>

            {/* FAQs section */}
            <FaqsSection />
        </>
    );
};

export default Page;