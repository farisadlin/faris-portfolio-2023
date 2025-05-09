import React from 'react';
import HeadingFormat from './HeadingFormat';
import ResumeBtn from './ResumeBtn';
import Link from 'next/link';

const Contact = () => {
  const handleClick = () => {
    window.open('mailto:farisnura@gmail.com', '_blank');
  };

  return (
    <section
      className="h-screen md:h-half-screen"
      id="contact"
      role="region"
      aria-labelledby="contact-heading"
    >
      <div id="contact-heading">
        <HeadingFormat number={4} title={`What's Next?`} disableLine={true} />
      </div>
      <h2 className="my-2 text-6xl text-center text-zinc-200">Get In Touch</h2>
      <p className="mx-auto text-center md:w-2/3 lg:w-1/2">
        I&apos;m currently looking for any new opportunities and my inbox is always open. Whether
        you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </p>
      <div
        className="flex justify-center items-center mt-8"
        role="group"
        aria-label="Contact options"
      >
        <Link
          href="mailto:farisnura@gmail.com"
          aria-label="Send me an email (opens in default email client)"
        >
          <ResumeBtn
            text="Say Hi!"
            hasResume={false}
            noMargin
            onClick={handleClick}
            aria-label="Send me an email to say hello"
          />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
