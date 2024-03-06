import Image from "next/image";

const Homepage = () => {
  return (
    <div className=" flex flex-col lg:flex-row gap-4 h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Image Container */}
      <div className="h-1/3 relative lg:w-1/2 lg:h-full">
        <Image src="/hero.png" alt="hero-img" fill className="object-contain" />
      </div>

      {/* Text Container */}
      <div className="h-1/2 flex flex-col gap-8  justify-center lg:w-1/2 lg:h-full ">
        <h1 className="text-4xl md:text-6xl font-bold">Front-End Developer</h1>

        <p className="md:text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          voluptas cumque ipsa. Corporis delectus maiores repellendus corrupti
          odit aliquam eveniet vero similique, dolor veniam cum, magni beatae
          optio et eum!
        </p>

        <div className="flex w-full gap-4 font-semibold">
          <button className="p-4 rounded-lg ring-1 ring-white bg-white text-purple-600">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
