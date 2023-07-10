import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[200px] absolute -right-16 bottom-0 mix-blend-color-dodge animate-pulse duration-75">
      <Image
        src={"/circles.png"}
        alt=""
        width={200}
        height={150}
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;
