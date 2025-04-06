import React from "react";
import HeadingFormat from "./HeadingFormat";
import ResumeBtn from "./ResumeBtn";
import Link from "next/link";

const Contact = () => {
  const handleClick = () => {
    window.open("mailto:farisnura@gmail.com", "_blank");
  };

  return (
    <section className="h-screen md:h-half-screen" id="contact">
      <HeadingFormat number={4} title={`What's Next?`} disableLine={true} />
      <p className="my-2 text-6xl text-center text-zinc-200">Get In Touch</p>
      <p className="mx-auto text-center md:w-2/3 lg:w-1/2">
        I’m currently looking for any new opportunities and my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>
      <div className="flex justify-center items-center mt-8">
        <Link href="mailto:farisnura@gmail.com">
          <ResumeBtn
            text="Say Hi!"
            hasResume={false}
            noMargin
            onClick={handleClick}
          />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
