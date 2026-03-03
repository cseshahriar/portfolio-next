import Container from "@/components/Container";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
        <div>
          <h3 className="font-semibold text-white/70 tracking-wide mb-1">Software Engineer</h3>
          <h2 className="text-3xl md:text-5xl">Hello I&apos;m</h2>
          <h1 className="text-lightSky text-3xl md:text-5xl tracking-normal">Md. Shahriar Hosen</h1>
        </div>
        <p className="w-auto md:max-w-[500px] text-white/60 leading-6">
          Senior Python & Django Developer | DRF API Expert | AWS & Linux Deployment | CI/CD with GitHub Actions I am a Full-Stack Web Developer with over 5 years of professional experience in building, deploying, and maintaining production-ready web applications. I specialize in backend-heavy systems with Django and DRF, while also having solid frontend experience.
        </p>

        <a
          download href={'/resume.pdf'}
          className="bg-transparent rounded-full border border-lightSky/50 flex items-center px-6 py-2.5 gap-2 text-sm text-lightSky hover:bg-hoverColor hover:text-black hoverEffect"
        >
          Download CV <Download className="w-4 h-4" />
        </a>
        <SocialLinks />
        <br/>
        <Statistics />
      </div>

      <Photo/>
    </Container>
  );
}
