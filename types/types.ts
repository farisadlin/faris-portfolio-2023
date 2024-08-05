export interface ExperienceProps {
  id: number;
  jobPosition: string;
  company: string;
  dateRange: string;
  jobDesc: string[];
  url: string;
}

export interface HeadingFormatProps {
  title: string;
  number: number;
  disableLine?: boolean;
}

export interface ExperienceItemProps {
  experience: ExperienceProps;
}
