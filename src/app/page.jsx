import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row app-container">
      {/* IMAGE CONTAINER  */}
      <div className="home-section relative">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="home-section flex flex-col gap-8 justify-center lg:items-start items-center">
        {/* TITLE  */}
        <h1 className="text-4xl md:text-6xl font-bold ">Anel Danza</h1>
        {/* DESCRIPTION  */}
        <p className="md:text-xl">
          This is a portfolio intro description for Anel Danza
        </p>

        {/* BUTTONS  */}
        <div className="flex gap-4 justify-center lg:justify-start">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
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
