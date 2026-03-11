"use client";

import React, { useState } from 'react'
import Title from './Title'
import { Input } from './ui/input'
import { useToast } from '@/hooks/use-toast'
import { Textarea } from './ui/textarea';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button';

const ContactForm = () => {
    const toast = useToast();
    const [status, setStatus] = useState('');
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Address: "",
        Message: "",
        Service: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };

    const handleSelectChange = (value: string) => {
        setFormData((prevData) => ({...prevData, Service: value}));
    };

    const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(formData);
    }


    return (
        <form className="space-y-4">
            <Title className='text-2xl md:text-4xl'>Let&apos;s work together</Title>
            <p className="text-white/60 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ad quos officiis nam tenetur similique minus hic veritatis. Sapiente, ab?</p>

            <div className="flex fle-col gap-4">
                <div>
                    <Input type='text' id="name" name="Name" required placeholder='Your Name' value={formData?.Name} onChange={handleChange} />
                    <Input type='tel' id="phone" name="Phone" required placeholder='Your phone number' value={formData?.Email} onChange={handleChange} />
                </div>
                <div>

                    <Input type='email' id="email" name="Email" required placeholder='Your email address' value={formData?.Phone} onChange={handleChange} />
                    <Input type='address' id="address" name="Address" required placeholder='Your address' value={formData?.Address} onChange={handleChange} />
                </div>
            </div>
            <Textarea name='Message' placeholder='Write message here' value={formData.Message} onChange={handleChange} rows={5} />
            <Select onValueChange={handleSelectChange}>
                <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent className="bg-bodyColor text-white border-white/20">
                    <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value='Web development'>Web Development</SelectItem>
                        <SelectItem value='Apps development'>Apps Development</SelectItem>
                        <SelectItem value='Server'>Server</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Button
                type='submit'
                disabled={isLoading}
                onClick={handleSubmit}
                className='w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 hover:border-lightSky hover:bg-lightSky/10 hover:text-hoverColor hoverEffect'
                >
                    {isLoading ? 'Submitting message...' : 'Send Message'}
                </Button>
        </form>
    )
}

export default ContactForm