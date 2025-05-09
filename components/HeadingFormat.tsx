import React from 'react';
import type { HeadingFormatProps } from '../types/types';

const HeadingFormat = ({ number, title, disableLine = false }: HeadingFormatProps) => {
  return (
    <div
      className={`flex ${
        disableLine
          ? 'justify-center'
          : 'after:relative after:content after:top-4 after:md:top-5 after:h-0.5 after:ml-5 after:bg-zinc-700 after:w-5 after:sm:w-56 after:flex-auto after:sm:flex-auto after:xl:flex-none after:block after:md:block'
      }`}
      role="heading"
      aria-level={2}
    >
      <span
        className={`text-secondary ${
          disableLine ? 'text-md' : 'text-xl md:text-2xl'
        } self-center font-mono`}
        aria-hidden="true"
      >{`0${number}.`}</span>
      <h3
        className={`${
          disableLine
            ? 'text-secondary font-space-mono text-md'
            : 'text-zinc-300 text-2xl md:text-3xl'
        } ml-3`}
        aria-label={`Section ${number}: ${title}`}
      >
        {title}
      </h3>
    </div>
  );
};

export default HeadingFormat;
