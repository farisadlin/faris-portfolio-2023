import { ExperienceItemProps } from "../types/types";

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  const { jobPosition, company, dateRange, jobDesc, url } = experience;

  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-secondary">
      <h3 className="text-xl font-semibold tracking-wide">
        {jobPosition} @{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={url}
          className="text-secondary hover:underline cursor-pointer"
        >
          {company}
        </a>
      </h3>
      <time className="text-xs tracking-wide uppercase dark:text-gray-400 font-space-mono">
        {dateRange}
      </time>
      <ul className="mt-3">
        {jobDesc.map((job, index) => (
          <li className="custom-bullet-list dark:text-gray-400" key={index}>
            {job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
