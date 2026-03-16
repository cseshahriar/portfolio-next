import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div className="transition-colors duration-500">
      <Container className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 text-center md:text-start">
          {/* Introduction */}
          <div>
            <h3 className="font-medium text-gray-500 dark:text-white/70 tracking-widest mb-2 uppercase">
              Software Engineer
            </h3>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 dark:text-white">
              Hello, I&apos;m
            </h2>
            <h1 className="mt-2 text-3xl md:text-5xl font-bold text-lightSky dark:text-lightSky mt-1">
              Md. Shahriar Hosen
            </h1>
          </div>

          {/* Description */}
          <div className="w-full h-[170px] md:h-[150px] relative">
            <div className="absolute top-0 left-0 w-full">
              <HomeDescription />
            </div>
          </div>

          {/* CV Download */}
          <a
            download
            href="/resume.pdf"
            className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium rounded-full border dark:border-white/60 dark:text-white border-lightSky/60 bg-white text-lightSky shadow-md transition-all hover:bg-lightSky hover:text-white hover:shadow-lg dark:bg-transparent dark:border-lightSky/50 dark:text-lightSky"
          >
            Download CV <Download className="w-4 h-4" />
          </a>

          {/* Social Links */}
          <SocialLinks />

          {/* Statistics */}
          <Statistics />
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end items-center">
          <Photo />
        </div>
      </Container>
    </div>
  );
}