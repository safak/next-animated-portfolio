"use client";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";

const ContactPage = () => {
  const [sucess, setSuccess] = useState(false);
  const [validationErr, setValidationErr] = useState("");
  const [err, setErr] = useState(false);
  const text = "Say Hello";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setErr(false);
    setSuccess(false);
    setValidationErr("");
    const email = form.current.user_email.value;
    const message = form.current.user_message.value;

    if (!message) {
      setValidationErr("Please enter a message.");
      return;
    }
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setValidationErr("Please enter a valid email address.");
      return;
    }
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setErr(true);
          console.log(error);
        }
      );
  };
  useEffect(() => {
    setTimeout(() => {
      if (sucess) {
        setSuccess(false);
      } else {
        setErr(false);
      }
    }, 3000);
  }, [sucess, err]);
  return (
    <motion.div
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[90%] mt-6 flex flex-col lg:flex-row lg:justify-between  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* text-Containter  */}
        <div className="h-[20%] lg:h-full  lg:w-1/2 flex justify-center items-center text-6xl">
          <div className="flex">
            {text.split("").map((letter, index) => (
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
            <div className="animate-bounce">😊</div>
          </div>
        </div>
        {/* form-containter */}
        <div className="mt-10 flex  items-center justify-center ">
          <div class="form-container w-96 xl:w-[450px] 2xl:w-[500px] h-[500px]">
            <form class="form" onSubmit={sendEmail} ref={form}>
              <div class="form-group ">
                <label for="email">Email</label>
                <input
                  className="h-12"
                  name="user_email"
                  id="email"
                  type="email"
                />
              </div>
              <div class="form-group">
                <label for="textarea">How Can I Help You?</label>
                <textarea
                  className="h-24 xl:h-56  "
                  cols="50"
                  rows="10"
                  id="textarea"
                  name="user_message"
                ></textarea>
              </div>
              <button type="submit" class="form-submit-btn">
                {sucess ?'Sent':'Submit'}
              </button>
              {validationErr && (
                <span className="text-red-600 font-semibold">
                  {validationErr}
                </span>
              )}
              {sucess && (
                <span className="text-green-600 font-semibold">
                  Your message has been sent sucessfully!
                </span>
              )}
              {err && (
                <span className="text-red-600 font-semibold">
                  Something went wrong!
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
