"use client";

import Container from '@/components/Container'
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { projects } from '@/constants';
import Image from 'next/image';
import React from 'react'
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowUp, Github } from 'lucide-react'
import { Separator } from '@/components/ui/separator';


const WorkPage = () => {
    return (
        <Container className="py-5 md:py-10 mb-10 md:mb-0">
            <Carousel
                opts={{align: "start", loop: true}}
                plugins={[
                    Autoplay({
                        delay: 3000,
                        stopOnMouseEnter: false,
                    }),
                ]}
                className='w-full'
            >
                <CarouselContent>
                        {
                            projects?.map((project) => (
                                <CarouselItem key={project?.id}>
                                    <Card className="bg-bodyColor border-lightSky/20 text-white">
                                        <CardContent className="p-6">
                                            <div className='flex flex-col md:flex-row md:items-center md:space-x-8'>
                                                <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                                                    <div className="mb-2">
                                                        <h2 className="mb-4 text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover hoverEffect mt-2">{project?.id}</h2>
                                                        <h3 className="mb-3 font-bold text-2xl">{project.title}</h3>
                                                        <p>{project.description }</p>
                                                        <div className="flex flex-wrap gap-2 mt-3">
                                                                { project?.stacks?.map((stack, i) => (
                                                                    <Badge key={i} variant="secondary" className="text-lightSky px-2 py-1">{stack}</Badge>
                                                                ))}
                                                        </div>
                                                    </div>
                                                    <Separator className="bg-gray-700" />
                                                    <div className="flex gap-4 pt-3">
                                                        <Link href={project?.liveUrl} target='_blank'   className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-3 hoverEffect"><ArrowUp className="rotate-45" /></Link>
                                                        <Link href={project?.githubUrl} target='_blank' className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-3 hoverEffect"><Github /></Link>
                                                    </div>
                                                </div>

                                                <div className="w-full md:w-1/2 order-1 md:order-2">
                                                    <div className='relative h-64 md:h-96 bg-gray-700 rounded-xl overflow-hidden'>
                                                        <Image src={project.image} alt={project.title} className="object-cover" />
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))
                        }
                </CarouselContent>

                <div className="absolute right-10 -bottom-8">
                    {/* Buttons */}
                    <CarouselPrevious className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
                    <CarouselNext className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
                </div>

            </Carousel>
        </Container>
    )
}

export default WorkPage