import Link from "next/link";
import Image from "next/image";

const SocialLink = ({ link }) => {
  return (
    <Link href={link.url}>
      <Image src={link.img} alt={link.alt} width={24} height={24} />
    </Link>
  );
};

export default SocialLink;
