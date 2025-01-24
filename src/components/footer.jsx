"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-accent-bg text-accent-text">
      <div className="app-container py-8 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Anel Danza</h2>
          <p className="text-sm">Full-Stack Developer</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Contact</h2>
          <p className="text-sm">
            <Link href="mailto:aneldanza23@gmail.com">Email</Link>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Social</h2>
          <p className="text-sm">
            <Link href="">LinkedIn</Link>
          </p>
        </div>
      </div>

      <div className="app-container py-4 text-sm text-center">
        <p>
          <a href="https://storyset.com/people">
            People illustrations by Storyset
          </a>
        </p>
        {/* <p>© 2022 Anel Danza. All rights reserved.</p> */}
      </div>
    </footer>
  );
};

export default Footer;
