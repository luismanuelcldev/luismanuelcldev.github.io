import { contactDetails, navLinks, socialLinks } from "@/constants";
import Link from "next/link"; // 31.5k (gzipped: 9.2k)
import React from "react"; // 6.9k (gzipped: 2.7k)
import NavLink from "./NavLink";
import { Phone, Mail } from "../components/Icons"; 

const Footer = () => {
    return (
        <footer className="py-10 border-t border-peach max-width">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-blue text-xl font-semibold">
                    Luis Manuel
                </Link>
                <nav className="flex gap-12 max-tablet:hidden">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.url} label={link.label} />
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex gap-3">
                    {socialLinks.map((link, index) => (
                        <a
                            href={link.url}
                            key={index}
                            className="w-10 h-10 bg-blue text-peach-100 flex items-center justify-center rounded"
                        >
                            <link.icon strokeWidth={0} fill="currentColor" />
                        </a>
                    ))}
                </div>
            </div>

            {/* contact details */}
            <div className="w-max border border-peach p-5 mx-auto flex gap-5 tablet:gap-10 flex-col tablet:flex-row items-center 
            rounded-lg mt-5">
                {contactDetails.map((detail, index) => (
    <div key={index} className="flex gap-3 items-center text-blue">
        {detail.icon === Phone ? (
            <a href={`tel:${detail.text}`} className="flex gap-3 items-center text-blue">
                <detail.icon size={20} />
                <p className="text-grey-600">{detail.text}</p>
            </a>
        ) : detail.icon === Mail ? (
            <a href={`mailto:${detail.text}`} className="flex gap-3 items-center text-blue">
                <detail.icon size={20} />
                <p className="text-grey-600">{detail.text}</p>
            </a>
        ) : (
            <>
                <detail.icon size={20} />
                <p className="text-grey-600">{detail.text}</p>
            </>
        )}
    </div>
))}

                

            </div>

            {/* copyright ©*/}

            <p className="mt-8 text-grey-600 text-center text-sm">
                Copyright © {new Date().getFullYear()} Luis Manuel De La Cuz Ledesma. Todos los derechos
                reservados.
            </p>
        </footer>
    );
};

export default Footer;
