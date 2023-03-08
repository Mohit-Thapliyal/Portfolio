import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoMdCall, IoMdMail } from "react-icons/io";
import {
  IoLocationSharp,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";
import { SiBuymeacoffee } from "react-icons/si";
import { motion } from "framer-motion";

import Notification from "../UI/Notification";
import Footer from "../Footer/Footer";
import AnimatedPage from "../UI/AnimatedPage";

const Contact = () => {
  const form = useRef();
  const [messageType, setMessageType] = useState(true);
  const [messageSent, setMessageSent] = useState(false);

  const closeMessageHandler = () => {
    setMessageSent(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageType(true);
        },
        (error) => {
          console.log(error.text);
          setMessageType(false);
        }
      );
    form.current.user_name.value = "";
    form.current.user_email.value = "";
    form.current.message.value = "";

    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 8000);
  };

  return (
    <AnimatedPage>
      <section
        id="contact"
        className="relative flex flex-col items-center justify-center w-full lg:min-h-screen"
      >
        {messageSent && (
          <Notification
            messageClass={messageType}
            onCloseMessage={closeMessageHandler}
          />
        )}
        <div className="flex flex-col w-full p-8 space-y-8 shadow-lg lg:flex-row lg:space-x-6 lg:space-y-0 bg-secondary md:p-32 lg:py-3 lg:px-4 lg:mt-5 xl:mt-0 lg:max-w-4xl xl:max-w-5xl sm:p-6 lg:rounded-xl xl:p-10 xl:py-14 bg-opacity-90 backdrop-blur-lg">
          <div className="flex flex-col justify-between space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-4xl font-bold tracking-wide">Contact Me</h1>
              <p className="pt-2 text-sm">
                Hey there! Thanks for visiting my website, if you have any
                query, suggestion or any kind of formal message then you can
                drop it here just by filling up the form. I'll reach out to you
                as soon as possible. Have a wonderful day!
              </p>
              <a
                href="https://www.buymeacoffee.com/mohitthapliyal"
                target="buymeacoffee"
                className="inline-flex items-center px-2 py-1 mt-2 space-x-2 duration-300 rounded-md bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-tertiary via-highlight to-tertiary xl:mt-4 sm:hover:scale-110"
              >
                <SiBuymeacoffee className="text-2xl text-secondary" />
                <span className="font-semibold font-edusa text-secondary">
                  Buy me a coffee
                </span>
              </a>
            </div>
            <div className="flex flex-col space-y-1 sm:space-y-6">
              <div className="transition-all duration-300 ease-in-out cursor-pointer w-fit hover:scale-110">
                <a
                  href="tel:+917011681275"
                  className="flex items-center space-x-2"
                >
                  <IoMdCall className="text-xl text-highlight" />
                  <span>+91 701 168 1275</span>
                </a>
              </div>
              <div className="transition-all duration-300 ease-in-out cursor-pointer w-fit hover:scale-110">
                <a
                  href="mailto:mohitthapliyal100@gmail.com"
                  className="flex items-center space-x-2"
                >
                  <IoMdMail className="text-xl text-highlight" />
                  <span>mohitthapliyal100@gmail.com</span>
                </a>
              </div>
              <div className="transition-all duration-300 ease-in-out cursor-pointer w-fit hover:scale-110">
                <p className="flex items-center space-x-2" href="">
                  <IoLocationSharp className="text-xl text-highlight" />
                  <span>New Delhi, India</span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex space-x-4 text-xl">
                <a
                  target="facebook"
                  href="https://www.facebook.com/profile.php?id=100010237621145"
                  className="transition-all duration-300 ease-in-out hover:text-highlight hover:scale-150"
                >
                  <IoLogoFacebook />
                </a>
                <a
                  target="github"
                  href="https://github.com/Mohit-Thapliyal"
                  className="transition-all duration-300 ease-in-out hover:text-highlight hover:scale-150"
                >
                  <IoLogoGithub />
                </a>
                <a
                  target="linkedin"
                  href="https://www.linkedin.com/in/mohit-thapliyal-b20104146/"
                  className="transition-all duration-300 ease-in-out hover:text-highlight hover:scale-150"
                >
                  <IoLogoLinkedin />
                </a>
                <a
                  target="instagram"
                  href="https://www.instagram.com/mohitthapliyal100/"
                  className="transition-all duration-300 ease-in-out hover:text-highlight hover:scale-150"
                >
                  <IoLogoInstagram />
                </a>
              </div>
            </div>
          </div>
          <div>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="p-8 py-5 text-gray-100 shadow-lg bg-tertiary rounded-xl xl:py-9 lg:w-96"
            >
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col space-y-4"
              >
                <div>
                  <label htmlFor="contact-name" className="text-sm font-semibold text-shadow-lg">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="user_name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-highlight text-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm font-semibold text-shadow-lg">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="user_email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-highlight text-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-msg" className="text-sm font-semibold text-shadow-lg">
                    Message
                  </label>
                  <textarea
                    id="contact-msg"
                    name="message"
                    rows="4"
                    type="text"
                    placeholder="Write your message"
                    className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 text-primary ring-gray-300 focus:ring-2 focus:ring-highlight"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="py-2 text-sm font-bold uppercase rounded-lg bg-highlight text-primary transition-all duration-300 ease-in-out hover:scale-105 hover:scale-y-110"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      <Footer className="sticky lg:absolute bottom-0" />
      </section>
    </AnimatedPage>
  );
};

export default Contact;
