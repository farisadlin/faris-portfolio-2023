import React from 'react';
import HeadingFormat from './HeadingFormat';
import Image from 'next/image';
import Photo from '../public/images/faris-photo.jpeg';

const About = () => {
  return (
    <section
      className="h-full lg:mx-20 xl:mx-auto py-28 max-w-7xl xl:max-w-4xl"
      id="about"
      role="contentinfo"
      aria-labelledby="about-heading"
    >
      <div id="about-heading">
        <HeadingFormat number={1} title="About Me" />
      </div>
      <div className="grid xl:grid-cols-2 mt-10 gap-x-10 grid-cols-1">
        <div>
          <p className="mb-4">
            Faris has always been passionate about the IT world, and his love for programming led
            him to pursue a career as a software engineer. What&apos;s impressive about Faris is
            that he&apos;s a self-taught programmer who has honed his skills through hard work and
            determination.
          </p>
          <p className="mb-4">
            With his experience in developing android apps and web projects using a variety of tools
            such as React.JS, Next.JS, Node.JS, GraphQL, Gatsby.JS, Strapi.JS, and Wordpress, Faris
            has proved to be a versatile and highly-skilled programmer.
          </p>
          <p className="mb-4">
            In his career, Faris has worked in a range of exciting roles, including social media
            analyst at{' '}
            <a
              href="https://kamtiv.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
              aria-label="Visit Kamtiv website (opens in new tab)"
            >
              Kamtiv
            </a>{' '}
            and IT consultant at{' '}
            <a
              href="https://www.gamatechno.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
              aria-label="Visit PT Gamatechno website (opens in new tab)"
            >
              PT Gamatechno
            </a>
            . He&apos;s also contributed his expertise as a software engineer (front-end) at{' '}
            <a
              href="https://xapiens.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
              aria-label="Visit Xapiens Teknologi website (opens in new tab)"
            >
              Xapiens Teknologi
            </a>
            ,{' '}
            <a
              className="text-secondary hover:underline"
              href="https://kargo.tech/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Kargo Technologies website (opens in new tab)"
            >
              Kargo Technologies
            </a>
            , and{' '}
            <a
              className="text-secondary hover:underline"
              href="https://onebrick.io/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Brick Technology website (opens in new tab)"
            >
              Brick Technology
            </a>
          </p>
          <p className="mb-4">
            Currently, he&apos;s on the lookout for new challenges and opportunities to learn and
            grow. His passion for the IT world drives him to keep pushing himself and his company
            towards greater success. With his wealth of experience and knowledge, Faris is sure to
            make a significant impact in the industry for years to come.
          </p>
        </div>
        <div className="relative">
          <div className="relative w-full h-full">
            <Image
              src={Photo}
              alt="Faris Adlin - Software Engineer and Front-end Developer"
              className="rounded-lg"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
