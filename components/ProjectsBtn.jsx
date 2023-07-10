import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative h-[125px] w-[125px] flex bg-circleStar bg-cover bg-center bg-no-repeat justify-center items-center group"
      >
        <Image
          src="/rounded-text.png"
          alt=""
          width={100}
          height={100}
          className="animate-spin-slow w-full h-full max-w-[100px] max-h-[100px]"
        />
        <HiArrowRight className="text-4xl absolute group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
