const logotext = "Uday";
const meta = {
  title: "Uday Tank",
  description:
    "I’m Uday Tank data scientist _ Full stack devloper,currently working in Berlin",
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
  title: "about my self",
  aboutme:
    "Creative and competitive, I am seeking a job opportunity in a growth-oriented origination where I can learn and improve my skills and knowledge. And make the best use of my skills and contribute to the organization’s growth. Skillset contains javascript frameworks such as React-Native and React.js and also has a core language of HTML and CSS.",
};
const worktimeline = [
  {
    jobtitle: "JuniorReact Native Development",
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
    name: "React Js",
    value: 50,
  },
  {
    name: "HTML",
    value: 80,
  },
  {
    name: "CSS",
    value: 80,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "Jquery",
    value: 50,
  },
  {
    name: "Figma",
    value: 70,
  },
  {
    name: "BootStrap",
    value: 50,
  },
];

const services = [
  {
    title: "Web Designing",
    description:
      "I am a fresher web Designer with the basic knowlage of HTML, CSS also a good knowlage of framework such as a Bootstrape.",
  },
  {
    title: "Figma Design",
    description:
      "I am a fresher UI UX Designer with the good knowlage of Designing software like figma, photoshope and adobe xd.",
  },
  {
    title: "React Software Development",
    description:
      "I am a fresher frontend developer with the good knowlage of React Native and also a good knowlage of implimating smoothless api and basic knowalge of redux.",
  },
];

const dataportfolio = [
  {
    id: 1,
    title: "CARGO MANAGEMENT SYSTEM (REACT NATIVE)",
    img: "https://imgs.search.brave.com/IVurh6XBda1GB40mWBHAgs2P6PYvgtxRGLokCk_qg3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NDYyOTIzNy9waG90/by9oaWdoLWFuZ2xl/LXZpZXctb2Ytd2Fy/ZWhvdXNlLXdpdGgt/Zm9ya2xpZnQtcGFs/bGV0LWFndi1hbmQt/Y2FyZGJvYXJkLWJv/eGVzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1vc0dJTE0t/WF9aek12bi1tSlJq/ZHV5SjVOZEdPc1Rt/dEQ3NGFVWHBjS0pn/PQ",
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
    img: "https://imgs.search.brave.com/s50Vhh2jyJNxb3ItIvv6y3Q0C7KKY70csSy8grlW7t0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/MzE0NjE4L3Bob3Rv/L3RydWNrcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WTEz/QVdiWFUwYmlJdDBt/T3NhMlIyaWZia3ZB/T0hRaGF5MnNwZ3At/dWRxbz0",
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
    link: "#",
  },
  {
    id: 3,
    title: "ORGANIZATION MANAGEMENT APPLICATION (REACT NATIVE)",
    img: "https://imgs.search.brave.com/9NYpL2IW2cvKNQziZdR6uuAGparusPwaA5topRWTU8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1w/bGljYWJsZS5jb20v/aW1hZ2VzL21pZHRo/dW1iL21lZXRpbmdf/MTIzMjZfMVRkdEow/MS5qcGc",
    description: "AN INTEGRATED PLATFORM FOR EMPLOYEE AND INVENTORY MANAGEMENT",
    projectDetails: `Built location-based attendance system with selfie verification
    Developed task assignment and status updating workflow
    Created leave management system with approval processes
    Implemented employee profile management with historical data
    Engineered inventory tracking system with barcode scanning
    Built dynamic forms for advance salary requests and approvals
    Developed stock usage reporting with automated inventory updates
    Integrated camera functionality for work verification processes`,
    link: "#",
  },
//   {
//     id: 4,
//     title: "Digital Taxi Fare Meter using Arduino",
//     img: "https://circuitdigest.com/sites/default/files/projectimage_mic/Digital-Taxi-Fare-Meter-using-Arduino.jpg",
//     description: "Digital Taxi Fare Meter using Arduino.",
//     projectDetails: `This project focuses on creating an innovative taxi fare meter using an Arduino circuit. The system is designed to accurately measure distance and calculate fare based on the journey. Key features include:

// • Distance Measurement: Utilizes a sensor attached to a dummy car wheel to accurately measure the distance traveled during the ride.
// • Fare Calculation: Automatically calculates the fare based on the distance measured, providing a transparent pricing model.
// • Real-Time Display: Displays both the distance traveled and the fare amount in real-time for the driver’s convenience.
// • User Activation: The driver can easily activate the system and finalize the fare by pressing a button at the end of the ride.

// This project aims to enhance the efficiency and transparency of taxi fare calculations, benefiting both drivers and passengers.`,
//     link: "#",
//   },
  // {
  //     id: 4,
  //     title: "The Wisdom of Life",
  //     img: "https://picsum.photos/400/600/?grayscale",
  //     description: "The wisdom of life consists in the elimination of non-essentials.",
  //     link: "#",
  // },
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
