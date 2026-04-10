import Container from "@/components/Container";
import Title from "@/components/Title";
import { servicesData } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ServicesPage = () => {
    return (
        <section className="min-h-[80vh] py-10">
            <Container>
                <Title className="text-center text-4xl">Services We Provide</Title>

                <p className="text-center max-w-2xl mx-auto mb-12">
                    I help startups, businesses, and individuals build modern web
                    applications using cutting-edge technologies like Python, Django, DRF, FastAPI, PostgreSQL, MySQL, React, Next.js, Tailwindcss, Linux, AWS and scalable backend systems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((item) => (
                        <div
                            key={item._id}
                            className="group p-6 rounded-xl border border-text-color/10 bg-color/5 hover:bg-color/10 transition-all duration-300 shadow-md hover:shadow-xl"
                        >
                        {/* Top section */}
                        <div className="flex justify-between items-center mb-5">
                            <span className="text-4xl font-bold text-color group-hover:hoverColor transition">
                                {item._id}
                            </span>

                            <Link href={item.href} target="_blank">
                                <ArrowUpRight className="w-6 h-6 text-color group-hover:hoverColor transition" />
                            </Link>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold mb-3 group-hover:text-lightSky">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-color leading-relaxed">
                            {item.description}
                        </p>

                        {/* Bottom border */}
                        <div className="mt-6 border-b border-white/10"></div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-color">
                    Have a project in mind?
                </h2>

                <p className="text-color mb-6">
                    Let&#39;s work together to build something amazing.
                </p>

                <Link
                    href="/contact"
                    className="px-6 py-3 rounded-lg bg-lightSky text-white dark:text-color font-medium hover:opacity-90 transition"
                >
                    Start a Project
                </Link>
                </div>
            </Container>
        </section>
    );
};

export default ServicesPage;