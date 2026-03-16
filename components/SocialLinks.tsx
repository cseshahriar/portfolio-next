import { Linkedin, Github, Youtube, Facebook } from 'lucide-react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const SocialData = [
    {
        title: "LinkedIn",
        icon: <Linkedin className='w-5 h-5' />,
        href: "https://www.linkedin.com/in/cseshahriar"
    },
    {
        title: "GitHub",
        icon: <Github className='w-5 h-5' />,
        href: "https://github.com/cseshahriar"
    },
    {
        title: "Facebook",
        icon: <Facebook className='w-5 h-5' />,
        href: "https://www.facebook.com/shahriarhosencse/"
    },
    {
        title: "Youtube",
        icon: <Youtube className='w-5 h-5' />,
        href: "https://www.youtube.com/@learnwithshahriar-bd"
    },
];

const SocialLinks = () => {
    return(
        <TooltipProvider>
            <div className='flex items-center gap-3 mt-2'>
                {SocialData?.map((item) => (
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild>
                            <Link href={item?.href} target="_blank" rel="noopener noreferrer"
                                className="dark:text-white text-lightSky/80 hover:text-hoverColor/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:text-lightSky hoverEffect"
                            >
                                {item?.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className='text-sx uppercase font-medium rounded-[6px]'>{item.title}</TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
}

export default SocialLinks