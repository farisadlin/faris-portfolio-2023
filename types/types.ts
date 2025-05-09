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

export interface ResumeBtnProps {
  hideBtn?: boolean;
  noMargin?: boolean;
  text?: string;
  urlDownload?: string;
  hasResume?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  'aria-label'?: string;
}
