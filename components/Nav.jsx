import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiInboxStack,
} from "react-icons/hi2";
//  links
const links = [
  { name: "home", path: "/", icon: <HiHome /> },
  // { name: "about", path: "/about", icon: <HiUser /> },
  // { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },

  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

//next link
import Link from "next/link";
//next router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="md:flex flex-col items-center xl:justify-center fixed gap-y-4 h-max mt-auto xl:right-[2%] md:top-0  hidden z-50 xl:w-16 xl:max-w-md xl:h-screen">
      <div className="w-full flex xl:flex-col justify-between xl:justify-center items-center gap-y-10 px-10 md:px-40 xl:px-0 xl:h-max py-2 xl:py-10 bg-white/10 backdrop-blur-sm text-2xl xl:text-xl xl:rounded-full">
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
          >
            {/* tooltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white flex items-center p-[6px] relative rounded-sm">
                <p className="text-[10px] text-primary leading-none font-semibold capitalize">
                  {link.name}
                </p>
                {/* triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            {/* icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
