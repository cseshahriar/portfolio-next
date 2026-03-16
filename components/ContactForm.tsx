"use client";

import React, { useState } from "react";
import Title from "./Title";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import { Check } from "lucide-react";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please input your name and email to continue.");
      return;
    }

    const form = new FormData();
    const currentDateTime = new Date().toLocaleString();

    // Forminit required fields
    form.append("fi-sender-fullName", formData.name);
    form.append("fi-sender-email", formData.email);
    form.append("fi-sender-phone", formData.phone);
    form.append("fi-text-message", formData.message);

    // custom fields
    form.append("fi-select-service", formData.service);
    form.append("fi-extra-address", formData.address);
    form.append("fi-meta-date", currentDateTime);

    console.log([...form.entries()]);

    try {
      setIsLoading(true);

      const response = await fetch("https://forminit.com/f/hzf9vo03nyk", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setSuccess(true);
        setStatus("Success! Your message has been sent.");
        toast.success("Success! Your message has been sent.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
          service: "",
        });
      } else {
        toast.error("Error! Unable to send your message.");
      }
    } catch (error) {
      console.log("form error ", error);
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 relative overflow-visible">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Title className="text-2xl md:text-4xl">Let&apos;s work together</Title>

        <p className="text-color/60 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ad quos
          officiis nam tenetur similique minus hic veritatis.
        </p>

        {success ? (
          <div>
            <motion.div
              className="flex items-center justify-center gap-3 py-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="border-2 border-lightSky w-20 h-20 rounded-full flex items-center justify-center text-lightSky">
                <Check className="w-10 h-10" />
              </div>

              <div>
                <h2 className="text-4xl leading-none font-extrabold text-transparent text-outline">
                  Thank you!
                </h2>
                <p>{status}</p>
              </div>
            </motion.div>
          </div>
        ) : (
          <>
            <div className="flex flex-col md:flex-row gap-1">
              <div className="flex-1">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="mb-2 disabled:placeholder:text-white/20 disabled:bg-white/20"
                />

                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="mb-2 disabled:placeholder:text-white/20 disabled:bg-white/20"
                />
              </div>

              <div className="flex-1">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="mb-2 disabled:placeholder:text-white/20 disabled:bg-white/20"
                />

                <Input
                  type="text"
                  name="address"
                  placeholder="Your address"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="mb-2 disabled:placeholder:text-white/20 disabled:bg-white/20"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
                <Textarea
                  name="message"
                  placeholder="Write message here"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="disabled:placeholder:text-color/20 disabled:bg-color/20"
                />
                <br/>
                <Select
                  onValueChange={handleSelectChange}
                  value={formData.service}
                  disabled={isLoading}
                >
                  <SelectTrigger className="disabled:placeholder:text-color/20 disabled:bg-color/20">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>

                  <SelectContent className="g-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700">
                    <SelectGroup>
                      <SelectLabel  className="text-gray-500 dark:text-gray-400">Select a service</SelectLabel>

                      <SelectItem value="Web development"
                        className="hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700"
                      >
                        Web Development
                      </SelectItem>
                      <SelectItem value="Apps development"
                        className="hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700"
                      >
                        Apps Development
                      </SelectItem>

                      <SelectItem value="Server"
                      className="hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700"
                      >Server Management</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="mt-8 w-full py-4 bg-hoverColor text-white dark:text-color/80 border border-lightSky/20 hover:border-lightSky hover:bg-lightSky/10 hover:text-hoverColor hoverEffect"
                >
                  {isLoading ? "Submitting message..." : "Send Message"}
                </Button>
            </div>

          </>
        )}
      </form>
    </div>
  );
};

export default ContactForm;