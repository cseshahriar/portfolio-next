"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import Sidebar from "./Sidebar";
import Container from "./Container";
import { NavbarData } from "@/constants";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();
    console.log("test", isSidebarOpen);

    return (
        <header className="border-b border-b-hoverColor/10 sticky top-0 z-50 bg-bodyColor">
            <Container className="py-5 flex items-center justify-between">
                {/* Logo */}
                <Logo title="Md. Shahriar Hosen" subtitle="" />

                {/* Navbar  */}
                <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
                    {
                        NavbarData?.map((item) => (
                            <Link href={item?.href} key={item?.title}
                                className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden ${pathname === item?.href && "text-hoverColor" }`}
                            >
                                {item?.title}
                                <span className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect ${pathname === item?.href ? "translate-x-0" : "-translate-x-[105%]"}` } />
                            </Link>
                        ))
                    }

                    {/* Resume pdf  */}
                    <button className="text-sm bg-lightSky/10 px-4 py-2
                            rounded-md border border-hoverColor/10
                            hover:border-hoverColor hover:bg-hoverColor
                            hover:text-black hoverEffect overflow-hidden
                            ">
                        <Link
                            href={'/resume.pdf'}
                            target="_blank"
                            rel="noopener noreferrer"
                            >Hire Me</Link>
                    </button>

                    {/* Dark and light mode  */}
                    <ThemeToggle />
                </div>

                <button className="inline-flex md:hidden relative"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <Menu className="hover:text-hoverColor hoverEffect"/>
                </button>
            </Container>

            <div className="md:hidden">
                <Sidebar
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    pathname={pathname}
                />
            </div>
        </header>)
    ;
}

export default Header;