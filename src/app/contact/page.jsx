"use client";

// import { motion } from "motion/react";
import AnimatedPageWrapper from "@/components/animatedPageWrapper";
import ContactForm from "./form";
import ContactMeAnimation from "./contactMeAnimation";

const ContactPage = () => {
  return (
    <AnimatedPageWrapper>
      <div className="h-full flex flex-col lg:flex-row app-container overflow-scroll">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex lg:flex-col gap-4 items-center justify-center text-6xl ">
          <ContactMeAnimation />
        </div>

        <div className="h-1/2 lg:h-full lg:w-1/2  flex items-start lg:items-center  justify-center">
          <ContactForm />
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default ContactPage;
