/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Read Vasconez",
  title: "Hi, I'm Read Vasconez",
  subTitle: emoji(
    `Senior Software Engineer with 7+ years experience in Full-Stack, Backend, Frontend & Mobile App Development (Android & iOS). 
Designing high-performance, scalable systems, AI/ML integrations, Cloud (AWS, GCP, Azure), CI/CD, and DevOps. Focused on stability, reliability, and long-term maintainability.`
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/readvasconez",
  linkedin: "https://www.linkedin.com/in/read-vasconez-ortiz96/",
  gmail: "readsaydvasconezortiz97@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRISP AND EFFICIENT SOFTWARE SOLUTIONS",
  skills: [
    emoji("⚡ Full-Stack Web Development (React, Node.js, Express, Next.js, WordPress)"),
    emoji("⚡ Mobile App Development (Android & iOS)"),
    emoji("⚡ Cloud Architecture: AWS, GCP, Azure"),
    emoji("⚡ CI/CD Automation & DevOps"),
    emoji("⚡ Microservices & Scalable System Design"),
    emoji("⚡ AI & ML Integration including LLMs (Chatbots, Recommendations, Predictive Analytics)"),
    emoji("⚡ Monitoring, Logging & Observability for High Reliability")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "iOS",
      fontAwesomeClassname: "fab fa-apple"
    },{
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-sync-alt"
    },
    {
      skillName: "DevOps",
      fontAwesomeClassname: "fas fa-tools"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "AI",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "LLM",
      fontAwesomeClassname: "fas fa-comment-dots"
    },
    {
      skillName: "OpenAI / GPT",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "AI APIs Integration",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Microservices",
      fontAwesomeClassname: "fas fa-cubes"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad de Nariño — Faculty of Engineering",
      subHeader: "Bachelor’s Degree in Software Engineering",
      logo: require("./assets/images/universidad_de_nario_logo.png"),
      duration: "2014.2 – 2018.12",
      desc: "Studied programming, data structures, algorithms, databases, operating systems, and system design. Built academic and practical projects covering backend, web, and end-to-end software systems.",
      grade: "8.5 / 10",
      descBullets: [
        "Participated as a student member in Software & Computing Club.",
        "Worked on collaborative software development projects."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "87%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
    role: "Senior Software Engineer",
    company: "BetterWorld (US – Remote)",
    companylogo: require("./assets/images/betterworld_tech_logo.jpg"),
    date: "2022.6 – Present",
    descBullets: [
      <>Reduced load times by <strong>30–45%</strong>, improving engagement and conversion across web & mobile e-commerce apps.</>,
      <>Designed cloud systems on <strong>AWS, GCP, Azure</strong> to support <strong>2–3× traffic growth</strong> with high availability.</>,
      <>Built CI/CD pipelines, cutting release cycles by <strong>40%</strong> and reducing production errors.</>,
      <>Developed <strong>Android & iOS</strong> applications, expanding mobile reach and user engagement.</>,
      <>Integrated <strong>AI & LLM features</strong> (chatbots, recommendations, predictive analytics) via microservices.</>,
      <>Migrated legacy systems to <strong>cloud-native architectures</strong>, improving stability and resilience.</>,
      <>Introduced monitoring, logging & alerting, reducing downtime and improving operational confidence.</>,
      <>Collaborated with cross-functional teams to align technical solutions with business goals.</>,
    ]
  },
  {
    role: "Full-Stack Engineer",
    company: "Replit (US – Remote)",
    companylogo: require("./assets/images/repl_it_logo.jpg"),
    date: "2020.7 – 2022.5",
    descBullets: [
      <>Improved feature responsiveness, reducing load times by <strong>25–35%</strong> and increasing retention.</>,
      <>Built scalable services on <strong>AWS, GCP, Azure</strong> supporting <strong>2–3× user growth</strong>.</>,
      <>Implemented CI/CD and automated testing, shortening release cycles by <strong>40–50%</strong>.</>,
      <>Developed companion <strong>Android & iOS</strong> apps connected to cloud & AI services.</>,
      <>Integrated <strong>LLM APIs</strong> for chat automation, text analysis and predictive analytics.</>,
      <>Migrated legacy platforms to cloud-native systems, achieving <strong>>99.5%</strong> uptime.</>,
      <>Added monitoring and alerting, enabling <strong>30–40%</strong> faster incident resolution.</>,
      <>Mentored engineers and reduced recurring issues by <strong>15–20%</strong>.</>,
    ]
  },
  {
    role: "Software Developer",
    company: "ActiveOne (CO - Hybrid",
    companylogo: require("./assets/images/activeone_logo.jpg"),
    date: "2019.1 – 2020.6",
    descBullets: [
      <>Delivered production systems supporting <strong>hundreds to thousands</strong> of active users.</>,
      <>Reduced recurring bugs and post-release fixes by <strong>20–30%</strong>.</>,
      <>Optimized backend workflows and cloud services to improve performance under high load.</>,
      <>Implemented CI/CD pipelines and automated deployments to accelerate releases.</>,
      <>Added monitoring processes to improve incident response and system reliability.</>,
      <>Collaborated with distributed teams on scalable architecture and maintainable workflows.</>
    ]
  }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECRS THAT I HAVE DONE!",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.png"),
      projectName: "Saayahealth",
      projectDesc: "Culturally sensitive employee support services",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.png"),
      projectName: "Nextu",
      projectDesc: "Video-based candidate presentations",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/adminlte_logo.png"),
      projectName: "AdminLte",
      projectDesc: "Admin dashboards, role-based UI, enterprise feel",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://adminlte.io/"
        }
      ]
    },
    {
      image: require("./assets/images/vercel_devhire_logo.png"),
      projectName: "DevHire",
      projectDesc: "Connect tech talents with potential employers to streamline hiring",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dev-hire-vp.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/vercel_v_track_logo.png"),
      projectName: "V-Track",
      projectDesc: "Expense tracking",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vtrack-expense.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/vercel_climate_logo.png"),
      projectName: "klimatee - weather",
      projectDesc: "Climate/Eco-related, product showcase",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://klimatee.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/vercel_bank_logo.png"),
      projectName: "HooBank",
      projectDesc: "Modern banking-style dashboard demo, prototype",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bank-modern-app-r9rw.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/vercel_e_commerce_logo.png"),
      projectName: "E-commerce",
      projectDesc: "E-commerce store interface",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vijay-ecommerce.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/tableau_logo.png"),
      projectName: "Tableau",
      projectDesc: "Powerful data visualization and analytics platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.tableau.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements🏆"),
  subtitle:
    "Achievements and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+57 314 730 5446",
  email_address: "readsaydvasconezortiz97@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
