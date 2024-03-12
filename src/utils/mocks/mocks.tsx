import ArrowIcon from "../arrowIcon";
import ClockIcon from "../contactUsIcon/clockIcon";
import EmailIcon from "../contactUsIcon/emailIcon";
import OrgIcon from "../contactUsIcon/orgemailIcon";
import PhoneIcon from "../contactUsIcon/phoneNumberIcon";
import LocationIcon from "../footerIcon/locationIcon";
import WebwhizIcon from "../footerIcon/webwhizIcon";
import DevelopmentIcon from "../serviceIcons/developmentIcon";
import DigitalIcon from "../serviceIcons/digitalIcon";
import GraphicIcon from "../serviceIcons/graphicDesignIcon";
import UiUxIcon from "../serviceIcons/uiuxIcon";

export const navlinks = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "Portfolio",
    link: "/",
  },
  {
    name: "About Us",
    link: "/",
  },
  {
    name: "Services",
    link: "/",
  },
  {
    name: "Testimonials",
    link: "/",
  },
  {
    name: "Blog",
    link: "/",
  },
];

export const serviceData = [
  {
    title: "Graphic Design",
    description:
      "The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology to visually communicate ideas messages and concepts.",
    arrowIcon: <ArrowIcon />,
    categoryIcon: <GraphicIcon />,
  },
  {
    title: "UI/UX Design",
    description:
      "Our UI/UX design services are a harmonious blend of aesthetics and functionality. We specialize in crafting user experiences that captivate and interfaces that engage. Our team of dedicated designers and developers collaborate to create seamless.",
    arrowIcon: <ArrowIcon />,
    categoryIcon: <UiUxIcon />,
  },
  {
    title: "Development",
    description:
      "Development is where ideas evolve into powerful, functional, and scalable digital solutions. Our proficient development team is well-versed in the latest technologies and programming languages, crafting web and mobile applications .",
    arrowIcon: <ArrowIcon />,
    categoryIcon: <DevelopmentIcon />,
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing is our expertise, your pathway to online success. We specialize in navigating the dynamic digital landscape, offering strategic marketing solutions to propel your brand. From search engine optimization (SEO) and social media.",
    arrowIcon: <ArrowIcon />,
    categoryIcon: <DigitalIcon />,
  },
];

export const contactData = [
  {
    title: "michael.mitc@example.com",
    icon: <EmailIcon />,
  },
  {
    title: "michael.mitc@example.com",
    icon: <PhoneIcon />,
  },
  {
    title: "michael.mitc@example.com",
    icon: <OrgIcon />,
  },
  {
    title: "michael.mitc@example.com",
    icon: <ClockIcon />,
  },
];

export const AboutUsData = [
  {
    title: "Project Delivery",
    number: "58",
  },
  {
    title: "Happy Client",
    number: "120",
  },
  {
    title: "Yours Experience",
    number: "32",
  },
];

export const footerData = [
  {
    mainTitle: "Company",
    links: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "About Us",
        link: "/",
      },
      {
        title: "Careers",
        link: "/",
      },
      {
        title: "Press",
        link: "/",
      },
    ],
  },
  {
    mainTitle: "Our services",
    links: [
      {
        title: "UI/UX Design",
        link: "/",
      },
      {
        title: "E-comers",
        link: "/",
      },
      {
        title: "Marketing",
        link: "/",
      },
      {
        title: "Free delivery",
        link: "/",
      },
    ],
  },
  {
    mainTitle: "Contact",
    links: [
      {
        title: "alexgoat@gmail.com",
        icon: <EmailIcon />,
        link: "/",
      },
      {
        title: "+880 16096-55707",
        icon: <PhoneIcon />,
        link: "/",
      },
      {
        title: "221b Baker St London",
        icon: <LocationIcon />,
        link: "/",
      },
      {
        title: "WebWhiz.com",
        icon: <WebwhizIcon />,
        link: "/",
      },
    ],
  },
];
