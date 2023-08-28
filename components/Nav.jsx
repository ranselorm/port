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
  { name: "about", path: "/about", icon: <HiUser /> },
  // { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "portfolio", path: "/portfolio", icon: <HiViewColumns /> },

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
    <nav className="lg:flex flex-col items-center lg:justify-center fixed gap-y-4 h-max mt-auto lg:right-[2%] lg:top-0 hidden z-50 lg:w-16 lg:max-w-md lg:h-screen">
      <div className="w-full flex lg:flex-col justify-between lg:justify-center items-center gap-y-10 px-10 md:px-40 lg:px-0 lg:h-max py-2 lg:py-10 bg-white/10 backdrop-blur-sm text-2xl lg:text-xl lg:rounded-full">
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
                <p className="text-[14px] text-primary leading-none font-semibold capitalize">
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
