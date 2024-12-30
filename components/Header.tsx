import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";


const Header = () => {
    return (
        <header className="flex items-center justify-between h-20 max-width border-b border-peach">
            <Link href="/">
                <h5 className="text-blue text-xl font-semibold">Luis Manuel</h5>
            </Link>
            <nav className="flex items-center gap-12 max-tablet:hidden">
                <ul className="flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.url} label={link.label} />
                        </li>
                    ))}

                </ul>
                <Link href={"tel:+1 (829)-727-3392"} className="btn btn-primary">
                    <Phone size={24} />
                    Contáctame
                </Link>
            </nav>
            <MobileMenu />
        </header>
    );
};

export default Header;
