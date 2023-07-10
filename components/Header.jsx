import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full px-16 xl:px-0 flex">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <div className="text-2xl xl:tex-sm text-center xl:text-left">
              Selorm
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
