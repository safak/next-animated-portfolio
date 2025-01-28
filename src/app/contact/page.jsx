"use client";

import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AnimatedPageWrapper from "@/components/animatedPageWrapper";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  message: Yup.string().required("Message is required"),
  user_email: Yup.string().email("Invalid email").required("Email is required"),
});

const ContactPage = () => {
  const text = "Say Hello";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();
  const textAreaRef = useRef();

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  const sendEmail = () => {
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);

          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <AnimatedPageWrapper>
      <div className="h-full flex flex-col lg:flex-row app-container">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex gap-4 items-center justify-center text-6xl ">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{
                  opacity: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 3,
                    repeat: Infinity,
                  },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div>😄</div>
        </div>

        <div className="h-1/2 lg:h-full lg:w-1/2 bg-white/80 text-gray-900 shadow-primary-text shadow-md flex flex-col gap-8 justify-center text-xl rounded-xl p-24">
          <Formik
            initialValues={{ message: "", user_email: "" }}
            validationSchema={validationSchema}
            onSubmit={({ setSubmitting }) => {
              sendEmail();
              setSubmitting(false);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form ref={form} className="flex flex-col gap-8">
                <span>Dear Anel,</span>
                <div className="flex flex-col gap-1">
                  <Field
                    as="textarea"
                    innerRef={textAreaRef}
                    rows={6}
                    className="input-field resize-none"
                    name="message"
                    id="message"
                  />

                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error-message"
                  />
                </div>
                <span>My email address is:</span>
                <div className="flex flex-col gap-1">
                  <Field
                    type="email"
                    className="input-field"
                    name="user_email"
                    id="user_email"
                  />
                  <ErrorMessage
                    name="user_email"
                    component="div"
                    className="error-message"
                  />
                </div>
                <span>Regards</span>
                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    Object.keys(touched).length === 0 ||
                    Object.keys(errors).length > 0
                  }
                  className="bg-accent-secondary-bg hover:bg-accent-secondary-hover disabled:bg-accent-secondary-bg/50 text-accent-text font-semibold p-4 rounded"
                >
                  Send
                </button>
                {success && (
                  <span className="text-green-600 font-semibold">
                    Your message has been sent successfully!
                  </span>
                )}
                {error && (
                  <span className="text-red-600 font-semibold">
                    There was an error sending your message!
                  </span>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default ContactPage;
