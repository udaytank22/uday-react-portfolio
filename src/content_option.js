import WarehouseMAnagementApp from "./assets/images/tranportation_warehouse_managemet.png";
import LogisticManagemet from "./assets/images/logistic_managemet.png";
import organization_managemet from "./assets/images/organization_managemet.png";
import InsuranceProcessManager from "./assets/images/insurance_project.png";
import OfficeTaskManager from "./assets/images/office_task_managemt.png";

const logotext = "Uday";
const meta = {
  title: "Uday Tank",
  description:
    "I’m Uday Tank, React Native Developer, Currently working in India",
};

const introdata = {
  title: "I’m Uday Tank",
  animated: {
    first: "I love development",
    second: "I code cool websites",
    third: "I develop mobile apps",
  },
  description:
    "I help clients design their dreams, and then I make those dreams come true.",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "about myself",
  aboutme:
    "Creative and competitive, I am seeking a job opportunity in a growth-oriented origination where I can learn and improve my skills and knowledge. And make the best use of my skills and contribute to the organization’s growth. Skillset contains JavaScript frameworks such as React-Native and React.js, and also has a core language of HTML and CSS.",
};
const worktimeline = [
  {
    jobtitle: "React Native Development",
    where: "Jatayu Technologie(Gandhidham)",
    date: "2024",
  },
];

const skills = [
  {
    name: "React Native",
    value: 80,
  },
  {
    name: "React JS",
    value: 70,
  },
  {
    name: "HTML",
    value: 70,
  },
  {
    name: "CSS",
    value: 70,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "jQuery",
    value: 50,
  },
  {
    name: "Figma",
    value: 70,
  },
  {
    name: "Bootstrap",
    value: 50,
  },
];

const services = [
  {
    title: "Web Designing",
    description:
      "I am a fresher web Designer with the basic knowledge of HTML, CSS, also a good knowledge of frameworks such as a Bootstrap.",
  },
  {
    title: "Figma Design",
    description:
      "I am a fresher UI UX Designer with good knowledge of designing software like Figma, Photoshop and Adobe XD.",
  },
  {
    title: "React Software Development",
    description:
      "I am a fresher frontend developer with good knowledge of React Native and also good knowledge of implementing smoothless api and knowledge of Redux.",
  },
];

const dataportfolio = [
  {
    id: 1,
    title: "CARGO MANAGEMENT SYSTEM (REACT NATIVE)",
    img: WarehouseMAnagementApp,
    description:
      " AN ENTERPRISE SOLUTION FOR WAREHOUSE CARGO MOVEMENT AND VEHICLE OPERATIONS",
    projectDetails: `Developed secure authentication system with role-based access controls
    Created dynamic forms for trip creation, job vouchers, and warehouse management
    Implemented real-time tracking for vehicle operations and cargo movement
    Built inventory management interfaces with filtering and search capabilities
    Integrated Firebase for push notifications based on user roles
    Developed data visualization components for reporting and analytics`,
    link: "#",
  },
  {
    id: 2,
    title: "TRANSPORT LOGISTICS PLATFORM (REACT NATIVE)",
    img: LogisticManagemet,
    description:
      "A COMPREHENSIVE LOGISTICS MANAGEMENT APPLICATION CONNECTING TRANSPORTERS AND SHIPPERS",
    projectDetails: `Implemented OTP-based authentication system integrated with WhatsApp via OAuth2
    Developed role-based access control for shippers, transporters, and agents
    Created interactive maps and location services for real-time GPS tracking
    Built a bidding system for transporters with real-time notifications
    Integrated Easebuzz payment gateway for secure financial transactions
    Engineered document verification system for KYC processes
    Implemented Firebase notifications for real-time user alerts and updates
    Designed multi-step forms for insurance purchase and FASTag acquisition`,
    link: "https://play.google.com/store/apps/details?id=com.jatayu.valk&pcampaignid=web_share",
  },
  {
    id: 3,
    title: "ORGANIZATION MANAGEMENT APPLICATION (REACT NATIVE)",
    img: organization_managemet,
    description: "AN INTEGRATED PLATFORM FOR EMPLOYEE AND INVENTORY MANAGEMENT",
    projectDetails: `Built location-based attendance system with selfie verification
    Developed task assignment and status updating workflow
    Created a leave management system with approval processes
    Implemented employee profile management with historical data
    Engineered inventory tracking system with barcode scanning
    Built dynamic forms for advanced salary requests and approvals
    Developed stock usage reporting with automated inventory updates
    Integrated camera functionality for work verification processes`,
    link: "#",
  },
  {
    id: 5,
    title: "INSURANCE PROCESS MANAGER (REACT NATIVE)",
    img: InsuranceProcessManager,
    description: "Platform to manage the insurance process status.",
    projectDetails: `The Insurance Process Manager App is a comprehensive tool designed to streamline vehicle insurance workflows
    by allowing seamless image uploads (up to 300KB for vehicle photos) and efficient data management for vehicle owners.
    It supports categorizing images into different types, such as document images, spot images, and preparing images, ensuring
    clear organization for coverage sites. The app simplifies the insurance process by storing essential vehicle and owner details.
    facilitating quick access to critical information, and enhancing the overall efficiency of policy management and claims processing.
    With its optimized image handling and user-friendly interface, the app significantly improves the speed and accuracy of insurance operations.`,
    link: "#",
  },
  {
    id: 6,
    title: "OFFICE TASK MANAGER (REACT NATIVE)",
    img: OfficeTaskManager,
    description: "Manage user-wise office tasks.",
    projectDetails: `The Office Manager App is a comprehensive solution designed to streamline office operations and enhance productivity.
     It allows users to create tasks with estimated working times, and if the task exceeds the set time, users must provide an explanation for the delay.
     The app features an attendance system based on selfie and current location verification, ensuring accurate and real-time tracking of employee presence.
     Leave management is also integrated, with requests submitted for admin approval, ensuring a smooth workflow for time-off requests. Additionally,
     the app includes a historical work log, allowing employees and managers to track completed tasks and hours worked. It provides a detailed list of company projects
     and their respective modules, enabling easy access to project details. With Firebase-powered push notifications, users are alerted to important updates, task reminders,
     and approvals, keeping everyone in the loop and on track. The app combines task management, attendance tracking, leave approvals, and project oversight in a single,
     efficient platform to optimize office operations.`,
    link: "#",
  },
  // {
  //     id: 5,
  //     title: "The Wisdom of Life",
  //     img: "https://picsum.photos/400/300/?grayscale",
  //     description: "The wisdom of life consists in the elimination of non-essentials.",
  //     link: "#",
  // },
  // {
  //     id: 6,
  //     title: "The Wisdom of Life",
  //     img: "https://picsum.photos/400/700/?grayscale",
  //     description: "The wisdom of life consists in the elimination of non-essentials.",
  //     link: "#",
  // },
  // {
  //     id: 7,
  //     title: "The Wisdom of Life",
  //     img: "https://picsum.photos/400/600/?grayscale",
  //     description: "The wisdom of life consists in the elimination of non-essentials.",
  //     link: "#",
  // },
  // {
  //     id: 8,
  //     title: "The Wisdom of Life",
  //     img: "https://picsum.photos/400/300/?grayscale",
  //     description: "The wisdom of life consists in the elimination of non-essentials.",
  //     link: "#",
  // },
  // {
  //     id: 9,
  //     title: "The Wisdom of Life",
  //     img: "https://picsum.photos/400/?grayscale",
  //     description: "The wisdom of life consists in the elimination of non-essentials.",
  //     link: "#",
  // },
  // {
  //     id: 10,
  //     title: "The Wisdom of Life",
  //     img: "https://picsum.photos/400/550/?grayscale",
  //     description: "The wisdom of life consists in the elimination of non-essentials.",
  //     link: "#",
  // },
  // {
  //     id: 11,
  //     title: "The Wisdom of Life",
  //     img: "https://picsum.photos/400/?grayscale",
  //     description: "The wisdom of life consists in the elimination of non-essentials.",
  //     link: "#",
  // },
  // {
  //     id: 12,
  //     title: "The Wisdom of Life",
  //     img: "https://picsum.photos/400/700/?grayscale",
  //     description: "The wisdom of life consists in the elimination of non-essentials.",
  //     link: "#",
  // },
];

const contactConfig = {
  YOUR_EMAIL: "tankuday90@gmail.com",
  YOUR_FONE: "(+91)97730 27241",
  description:
    "Feel free to contact me via phone or email for any queries, project discussions, or collaboration opportunities.",
  nama: "Uday Tank",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_n1byov9",
  YOUR_TEMPLATE_ID: "template_41htf3v",
  YOUR_USER_ID: "63-HR6cOWX8I2kWjU",
};

const adminContactConfig = {
  YOUR_EMAIL: "tankuday90@gmail.com",
  YOUR_FONE: "(+91)97730 27241",
  description:
    "Feel free to contact me via phone or email for any queries, project discussions, or collaboration opportunities.",
  nama: "Uday Tank",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  ADMIN_SERVICE_ID: "service_ge9942k",
  ADMIN_TEMPLATE_ID: "template_x6a1fps",
  ADMIN_USER_ID: "63-HR6cOWX8I2kWjU",
};

const socialprofils = {
  github: "https://github.com/udaytank22",
  linkedin: "https://www.linkedin.com/in/tankuday/",
  instagram: "https://www.instagram.com/er.uday_tank/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  adminContactConfig,
};
