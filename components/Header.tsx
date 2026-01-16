import { NavbarData } from "@/constants";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
    return (
        <header className="border-b border-b-hoverColor/10">
            <Container className="py-5 flex items-center justify-between">
                <Logo title="Shahriar Hosen" subtitle="</>" />
                <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
                    {
                        NavbarData?.map((item) => (
                            <Link href={item?.href} key={item?.title}>{item?.title}</Link>
                        ))
                    }
                </div>
            </Container>
        </header>)
    ;
}

export default Header;