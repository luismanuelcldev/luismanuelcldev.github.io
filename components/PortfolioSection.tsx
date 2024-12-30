"use client";
import { portfolios } from "@/constants";
import { useWindowSize } from "@/hooks/useWindowSize";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useEffect, useRef, useState } from "react";
import PortfolioItem from "@/components/PortfolioItem";
import "swiper/css";


const PortfolioSection = ({
    data,
    title,
}: {
    data: typeof portfolios;
    title: string;
}) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [sliderPerview, serSlidePerView] = useState(3);

    const { width } = useWindowSize();

    useEffect(() => {
        if (width < 768) {
            serSlidePerView(1);
        } else if (width < 1268) {
            serSlidePerView(2);
        } else {
            serSlidePerView(3);
        }
    }, [width]);

    return (
        < section className="max-width section-padding" >
            <div className="pb-3 border-b border-peach flex justify-between items-center">
                <p>{title}</p>
                <div className="flex gap-2">
                    <button
                        className="bg-peach-200 border border-peach p-1 rounded text-grey-700"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        className="bg-peach-200 border border-peach p-1 rounded text-grey-700"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>

            <div className="pt-8">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={sliderPerview}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {
                        data.map((portfolio, index) => (
                            <SwiperSlide key={index}>
                                <PortfolioItem portfolio={portfolio} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default PortfolioSection;

