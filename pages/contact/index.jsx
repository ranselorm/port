import { useState } from "react";
import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setError(true);
      return;
    }
    console.log(name, email, subject, message);
    setError(false);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  // if (error) {
  //   alert("All fields are required!");
  // }
  return (
    <div className="h-screen bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form */}
        <div className="flex items-center w-full max-w-[500px] flex-col">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 mx-auto w-full"
            onSubmit={handleSubmit}
          >
            {/* input group */}
            <div className="flex gap-x-8 w-full">
              <input
                type="text"
                placeholder="name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              className="textarea"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="border-white/50 border px-4 py-2 rounded-full flex items-center gap-x-4 max-w-[150px] overflow-hidden group hover:border-accent">
              Let's Talk <BsArrowRight className="text-xl" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
