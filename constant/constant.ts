import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { AiOutlineMedium } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';

export const MENUS = [
  'About',
  'Experience',
  'Work',
  'Contact',
]

export const INFO_LINKS = [
  {
    name: 'Github',
    icon: FiGithub,
    url: 'https://github.com/farisadlin/'
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/faris-nur-adlin-649100128/'
  },
  {
    name: 'Medium',
    icon: AiOutlineMedium,
    url: 'https://medium.com/@shifair'
  },
  {
    name: 'Twitter',
    icon: FiTwitter,
    url: 'https://twitter.com/shifairs'
  },
  {
    name: 'Email',
    icon: MdOutlineEmail,
    url: 'mailto:farisnura@gmail.com'
  },
]

export default {};