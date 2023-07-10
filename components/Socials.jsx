import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-6">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <AiOutlineTwitter />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <AiOutlineGithub />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <AiOutlineLinkedin />
      </Link>
    </div>
  );
};

export default Socials;
