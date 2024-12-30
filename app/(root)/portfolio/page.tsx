"use client";

import { useRef } from "react";
import { Metadata } from "next";
import Image from "next/image";
import PortfolioItem from "@/components/PortfolioItem";
import PortfolioSection from "@/components/PortfolioSection";
import { portfolios } from "@/constants";

const page = () => {

    return <>
        <section className="max-width section-padding">
            <div className="box text-center flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded bg-blue flex items-center justify-center flex-shrink-0 mb-5">
                    <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35} />
                </div>
                <h2 className="text-grey-700">Mi portafolio de proyectos</h2>
                <p className="text-grey-600">
                    Aquí encontrarás una lista de algunos de los proyectos en los que he trabajado.
                </p>
            </div>
        </section>

        <PortfolioSection data={portfolios} title={"Proyectos realizados en 2024"} />

    </>
};

export default page;