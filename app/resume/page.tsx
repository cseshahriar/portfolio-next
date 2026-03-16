"use client";

import Container from '@/components/Container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, Calendar, Code2, GraduationCap, User } from 'lucide-react';
import React from 'react'
import { motion } from "motion/react";
import { tabContent } from '@/constants';
import { Badge } from '@/components/ui/badge';

const tabMenu = [
    {title: "Experience", value: "experience", icon: Briefcase},
    {title: "Education", value: "education", icon: GraduationCap},
    {title: "Skills", value: "skills", icon: Code2},
    {title: "About Me", value: "about", icon: User},
];

const ResumePage = () => {
    return (
        <div className='py-5 md:py-10'>
            <Container>
                <Tabs defaultValue='experience' className='w-full flex flex-col md:flex-row gap-6 md:gap-10'>
                    <TabsList className='flex md:flex-col h-full bg-transparent md:w-64 gap-4'>
                        {
                            tabMenu?.map((item, index) => (
                                <TabsTrigger
                                    key={index}
                                    value={item?.value}
                                    className="bg-white/10 w-full py-2.5 data-[state=active]:text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-sx sm:text-sm rounded-md"
                                >
                                    <div className='flex items-center gap-1.5 md:w-[50%] md:gap-3'>
                                        <item.icon className='w-4 h-4 md:h-5 md:w-5' />
                                        {item?.title}
                                    </div>
                                </TabsTrigger>
                            ))
                        }
                    </TabsList>

                    <div className='flex-1 min-h-[400px]'>
                        {/* Experience */}
                        <TabsContent value='experience'>
                            <motion.h2
                                initial={{opacity: 0}} animate={{opacity: 1}}
                                className="text-2xl font-bold mb-6 text-lightSky"
                            >{tabContent?.experience?.title}</motion.h2>
                            <div className="space-y-6">
                                {
                                    tabContent?.experience?.items?.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity:0, y:20}}
                                            animate={{opacity: 1, y:0}}
                                            transition={{delay: index * 0.1}}
                                            className="border rounded-lg border-lightSky/20 p-6"
                                        >
                                            <div className="flex flex-col gap-1 md:flex-row justify-between md:items-center mb-4">
                                                <div className="">
                                                    <h3 className="text-lg font-semibold">{item.role}</h3>
                                                    <p className='text-color'>{item?.company}</p>
                                                </div>
                                                <div className="flex items-center text-color gap-2">
                                                    <Calendar/> {item?.period}
                                                </div>
                                            </div>
                                            <p className="mb-4 tracking-tighter text-color">{item?.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {item?.highlights?.map((highlight, i) => (
                                                    <Badge key={i} variant="secondary" className="bg-color text-color px-2 py-1 border border-text-color hover:border-hoverColor hover:text-white hover:bg-hoverColor">{highlight}</Badge>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value='education'>
                            <motion.h2
                                initial={{opacity: 0}} animate={{opacity: 1}}
                                className="text-2xl font-bold mb-6 text-color"
                            >{tabContent?.education?.title}</motion.h2>
                            <div className="space-y-6">
                                {
                                    tabContent?.education?.items?.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity:0, y:20}}
                                            animate={{opacity: 1, y:0}}
                                            transition={{delay: index * 0.1}}
                                            className="border rounded-lg border-lightSky/20 p-6"
                                        >
                                            <div className="flex flex-col gap-1 md:flex-row justify-between md:items-center mb-4">
                                                <div className="text-color">
                                                    <h3 className="text-lg font-semibold">{item.degree}</h3>
                                                    <p className=''>{item?.institute}</p>
                                                </div>
                                                <div className="flex items-center text-white/80 gap-2">
                                                    <Calendar/> {item?.period}
                                                </div>
                                            </div>
                                            <p className="mb-4 tracking-tighter text-color/90">{item?.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {item?.achievements?.map((highlight, i) => (
                                                    <Badge key={i} variant="secondary" className="bg-white text-black px-2 py-1 border border-text-color hover:border-hoverColor hover:text-white hover:bg-hoverColor">{highlight}</Badge>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value='skills'>
                            <motion.h2
                                initial={{opacity: 0}} animate={{opacity: 1}}
                                className="text-2xl font-bold mb-6 text-lightSky"
                            >{tabContent?.skills?.title}</motion.h2>
                            <div className="space-y-6">
                                {
                                    tabContent?.skills?.categories?.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity:0, y:20}}
                                            animate={{opacity: 1, y:0}}
                                            transition={{delay: index * 0.1}}
                                            className="border rounded-lg border-lightSky/20 p-6"
                                        >
                                            <div className="flex flex-col gap-1 md:flex-row justify-between md:items-center mb-4">
                                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                            </div>
                                            <p className="mb-4 tracking-tighter text-color/90">{item?.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {item?.skills?.map((skill, i) => (
                                                    <Badge key={i} variant="secondary" className="bg-white text-black px-2 py-1 border border-text-color hover:border-hoverColor hover:text-white hover:bg-hoverColor">{skill}</Badge>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value='about'>
                            <motion.h2
                                initial={{opacity: 0}} animate={{opacity: 1}}
                                className="text-2xl font-bold mb-6 text-lightSky"
                            >{tabContent?.about?.title}</motion.h2>

                            <div className="space-y-4">
                                <motion.div
                                    initial={{opacity:0, y:20}}
                                    animate={{opacity: 1, y:0}}
                                    transition={{delay: 0.1}}
                                    className="border rounded-lg border-lightSky/20 p-6"
                                >
                                    <p className="mb-6 text-lg text-color/90">{tabContent?.about?.bio}</p>
                                    <div className="mb-3">
                                        <h3 className="text-lg font-semibold">Interests</h3>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            { tabContent?.about?.interests?.map((interest, i) => (
                                                <Badge key={i} variant="secondary" className="bg-white text-black px-2 py-1 border border-text-color hover:border-hoverColor hover:text-white hover:bg-hoverColor">{interest}</Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold">Languages</h3>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            { tabContent?.about?.languages?.map((language, i) => (
                                                <Badge key={i} variant="secondary" className="bg-white text-black px-2 py-1 border border-text-color hover:border-hoverColor hover:text-white hover:bg-hoverColor">{language}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </Container>
        </div>
    )
}

export default ResumePage