import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Socials from "../components/Socials";
import Nav from "./Nav";
import {
  AiOutlineCloseCircle,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

const links = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "portfolio",
    path: "/portfolio",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <header className="absolute z-30 w-full px-10 xl:px-0">
      <div className="container mx-auto">
        <div className="flex xl:flex-row justify-between items-center gap-y-6 py-6 w-full">
          <Link href={"/"}>
            <div className="text-[18px]">Selorm</div>
          </Link>
          <Nav />
          <Socials />
          {isOpen ? (
            <AiOutlineCloseCircle
              className="text-4xl flex md:hidden transition-all duration-300"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <BiMenuAltRight
              className="text-4xl flex md:hidden transition-all duration-300"
              onClick={() => setIsOpen(true)}
            />
          )}

          <div
            className={`${
              isOpen ? "min-w-[100%]" : "min-w-0"
            } lg:hidden h-[30vh] bg-black/80 fixed top-0 right-0 bottom-12 overflow-hidden -z-10 transition-all duration-700 w-0 py-24`}
          >
            <ul className="flex items-start gap-x-4 px-10 justify-center">
              <div className="text-xl text-white flex gap-x-4 mt-10">
                {links.map((link, index) => (
                  <Link
                    href={link.path}
                    className={`${
                      link.path === pathname && "text-accent"
                    } capitalize text-[16px]`}
                    key={index}
                  >
                    <li onClick={() => setIsOpen(false)}>{link.name}</li>
                  </Link>
                ))}
              </div>
            </ul>
            <div className="flex items-center justify-center mt-10 gap-x-6 text-2xl">
              <Link
                href={""}
                className="hover:text-accent transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <AiOutlineTwitter />
              </Link>
              <Link
                href={""}
                className="hover:text-accent transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <AiOutlineGithub />
              </Link>
              <Link
                href={""}
                className="hover:text-accent transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <AiOutlineLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
