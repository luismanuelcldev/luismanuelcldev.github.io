"use client"
import { navLinks, socialLinks } from "@/constants";
import { Menu, Phone, X } from "lucide-react"; // 1.2k (gzipped: 705)
import Link from "next/link"; // 1.1k (gzipped: 466)
import React, { useState } from "react";
import NavLink from "./NavLink";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="tablet:hidden">
            {/* toggle button */}
            <button className="text-grey-700 hover:text-blue transition-colors"
                onClick={toggleMenu}
            >
                <Menu />
            </button>

            {/* sidebar */}

            <div className={`w-full h-full flex flex-col bg-peach-600 fixed top-0 left-0 z-50 transition-all duration-300 
            ease-in-out transform
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}>
                <div className="flex w-full items-center justify-between h-20 max-width border-b border-peach">
                    <Link href={"/"}>
                        <h5 className="text-blue text-xl font-semibold">Luis Manuel</h5>
                    </Link>
                    <button className="text-grey-700 hover:text-blue transition-colors"
                        onClick={toggleMenu}
                    >
                        <X />
                    </button>
                </div>
                
                <nav className="flex flex-col items-center justify-center gap-12 flex-1 gap-10">
                    <ul className="flex items-center flex-col gap-5">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.url}
                                    label={link.label}
                                    className="text-3xl"
                                />
                            </li>
                        ))}
                    </ul>
                    <Link href={"tel:+1 (829)-727-3392"} className="btn btn-primary">
                        <Phone size={24} />
                        Contáctame
                    </Link>
                </nav>

               <div className="w-full h-20 flex items-center justify-between max-width border-t border-peach-100">
    {
        socialLinks.map((link, index) => (
            <a href={link.url}
                key={index}
                className="text-grey-700 hover:text-blue transition-colors"
            >
                {link.label}</a>
        ))}
</div>
            </div>
        </div>
    );
};

export default MobileMenu;
