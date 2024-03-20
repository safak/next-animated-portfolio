"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, 
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        () => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setError(true);
        },
      );
  }

  const hello = "Say Hello";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

        {/*TEXT-CONTAINER*/}

        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-2xl sm:text-3xl lg:text-5xl xl:text-6xl">
          <motion.div>
            {hello.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </motion.div>
        </div>

        {/*FORM-CONTAINER*/}

        
          <form onSubmit={sendEmail} ref={form} className=" h-1/2 lg:h-full lg:w-1/2 rounded-xl text-xl flex flex-col gap-8 justify-center md:p-24 lg:p-24 p-15  mb-16 ">
            <span>Dear Akshay</span>
            <textarea name="user_message" rows="3" className="block p-5 w-full text-sm bg-transparent border-b-2 border-b-black outline-none resize-none disabled:pointer-events-none " />
            <span>My mail address is : </span>
            <input
              type="email"
              name="user_email"
              className=" bg-transparent border-b-2 border-b-black outline-none "
            />
            <span>Regards</span>
            <button className="bg-purple-200 rounded font-semibold p-4 text-gray-600">
              Send
            </button>
            {success && (
              <span className="text-green-600 font-semibold">
                Your message has been sent successfully
              </span>
            )}
            {error && (
              <span className=" text-red-600 font-semibold ">
                Something went wrong!
              </span>
            )}
          </form>
        
      </div>
    </motion.div>
  );
};

export default ContactPage;





{/*<textarea
              rows={6}
              name="user_message"
              className=" bg-transparent border-b-2 border-b-black outline-none resize-none bg-white"
            />*/}