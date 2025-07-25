export const Sections = [
  {
    title: "About Us",
    description:
      "Welcome to DevOpsFarm, where innovation meets expertise. We specialize in IT Training, Consultancy, Masterclass Programs, Internship Opportunities, and Website Design.",
    imgSrc: "/devopsconsultancy.png",
    alt: "About Us",
    imageFirst: true,
  },
  {
    title: "Who We Are",
    description:
      "Based in Jodhpur, India, DevOpsFarm serves clients globally with expertise in DevOps, cloud technologies, web development, and AI/ML.",
    imgSrc: "/redcap.png",
    alt: "Who We Are",
    imageFirst: false,
  },
  {
    title: "IT Training and Consultancy",
    description:
      "We offer hands-on, expert-led training and consultancy in DevOps, Cloud Computing, and Full Stack Development to keep professionals competitive.",
    imgSrc: "/our.png",
    alt: "IT Training and Consultancy",
    imageFirst: true,
  },
  {
    title: "Internship Programs",
    description:
      "Our internships are designed to provide practical, hands-on experience in IT. We work on live projects, giving interns the opportunity to apply what they've learned and build a solid foundation for their future careers.",
    imgSrc: "/contact-us-img1.png",
    alt: "Internship Programs",
    imageFirst: false,
  },
  {
    title: "Website Design",
    description:
      "Crafting visually compelling and user-friendly websites tailored to your business goals. Our design process combines creativity and technology to deliver digital experiences that engage and convert.",
    imgSrc: "/cloud.png",
    alt: "Who We Are",
    imageFirst: true,
  },
  {
    title: "Our Vision",
    description:
      "At DevOpsFarm, our vision is to empower individuals and businesses with the tools and skills they need to succeed in a digital-first world. We aim to provide high-quality services and training that foster innovation, efficiency, and growth.",
    imgSrc: "/Group44.png",
    alt: "IT Training and Consultancy",
    iimageFirst: false,
  },
  {
    title: "Masterclass Programs",
    description: (
      <>
        <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300">
          Our masterclasses offer in-depth knowledge on a wide range of cutting-edge technologies:
        </p>
        <ul className="list-disc text-green-400 list-inside md:text-lg sm:text-base text-sm mt-2 sm:px-2 dark:text-gray-300">
          {[
            "DevOps Tools (Docker, Kubernetes, Jenkins, Ansible, Git)",
            "Cloud Platforms (AWS, Azure, Google Cloud)",
            "Full Stack Development (MEAN, MERN)",
            "AI/ML and Data Science",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300">
          Each masterclass is structured to provide deep, practical insights, making you proficient in the technologies that are driving today innovations.
        </p>
      </>
    ),
    imgSrc: "/features-04.png",
    alt: "Masterclass Programs",
    imageFirst: true,
  },
];


export const teamMembers = [
  {
    name: "Omprakash Paliwal",
    role: "SRE CloudOps Engineer",
    image: "/omparkash.png",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Dinesh Paliwal",
    role: "SRE DevOps Engineer",
    image: "/WhatsApp Image 2025-01-31 at 16.28.43_9549ae9e.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },

  {
    name: "Nikhil Yadav",
    role: "SRE Full Stack Developer",
    image: "/nilkhil.png",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },

  {
    name: "Sanjay Kumar",
    role: "SRE Full Stack Developer",
    image: "/sanjay.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },

  
  {
    name: "Trilok Indraniya",
    role: "Full Stack Developer",
    image: "/trilok.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },

      {
    name: "Ishaan",
    role: "Associate DevOps Engineer",
    image: "/ishaan.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },

  {
    name: "Harshit Verma",
    role: "Lead UX Designer",
    image: "/verma.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/harshit-verma-uxdesign/",
      twitter: "https://x.com/hverma1728",
      instagram: "https://www.instagram.com/harshit.verma1011/",
    },
  },
  
    
    {
      name: "Preeti Bhati",
      role: "Associate DevOps Engineer", 
      image: "/p.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
  },
];
