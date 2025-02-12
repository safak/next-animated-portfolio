import Image from "next/image";

const Homepage = () => {
  return <div className="h-full flex flex-col">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2 relative">
      <Image src="/hero.png" alt="" fill className="object-contain"/>
    </div>
    {/* TEXT CONTAINER */}
    <div className="h-1/2">
    {/* Title */}
    <h1>Crafting Digital Experiences, Designing Tomorrow.</h1>
    </div>
  </div>;
};

export default Homepage;
