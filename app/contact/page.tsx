import ContactForm from '@/components/ContactForm';
import Container from '@/components/Container'
import { Mail, MapPinCheck, Phone } from 'lucide-react';
import React from 'react'


const infoData = [
    {
        title: "Phone",
        description: "(+8801710835653)",
        icon: <Phone/>
    },
    {
        title: "Email",
        description: "cse.shahriar.hosen@gmail.com",
        icon: <Mail />
    },
    {
        title: "Address",
        description: "Mirpur 12, Dhaka-1216",
        icon: <MapPinCheck />
    },
];

const ContactPage = () => {
    return (
        <Container className="py-5 md:py-10 flex flex-col md:flex-row gap-6 md:gap-14">
            <div className="w-full md:w-2/3">
                <ContactForm />
            </div>

            <div className="w-full md:w-2/3 flex flex-col justify-center gap-4 md:gap-8">
                {
                    infoData.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <span className="bg-lightSky/5 p-4 rounded-">{item?.icon}</span>
                            <div>
                                <h3 className="text-color/60 text-sm font-semibold">{item?.title}</h3>
                                <p>{item?.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}

export default ContactPage