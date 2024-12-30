import React from 'react'
import SectionHeading from './SectionHeading'
import { Star, ArrowRight } from 'lucide-react';
import Link from 'next/dist/client/link';
import { faqs } from '@/constants';
import Accordion from './Accordion';

const FaqsSection = () => {
    return (
        <section className="max-width section-padding overflow-hidden">
            <SectionHeading title="Preguntas Frecuentes"
                subtitle="Aqui pondre un parrafo para las Preguntas Frecuentes"
            />
            <div className="flex flex-col tablet:flex-row gap-5 items-start">
                <div className="box">
                    <Accordion data={faqs} />
                </div>
                <div className="box flex flex-col gap-5 tablet:max-w-md">
                    <div className="w-16 h-16 rounded bg-blue text-peach-100 flex items-center justify-center flex-shrink-0 
                    mb-2">
                        <Star fill="currentColor" size={30} />
                    </div>
                    <div>
                        <h5 className="text-grey-700 mb-2">¿Todavia tienes alguna pregunta?</h5>
                        <p className="text-grey-600">Puedes contactar conmigo a traves de mi correo electronico o mi numero de telefono</p>
                    </div>
                    <Link href={"tel:+1 (829)-727-3392"} className="btn btn-primary w-max">
                        Contactame <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FaqsSection