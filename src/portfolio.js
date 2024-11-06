import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
    enabled: true,
    animation: splashAnimation,
    duration: 2000
};



const illustration = {
    animated: true
};

const greeting = {
    username: "Ahmer Iqbal",
    title: "Hi, I'm Ahmer",
    subTitle: emoji(
        "A passionate Data Engineer 🚀 eager to build and optimize data pipelines, with foundational skills in data processing, ETL/ELT, and working with Python and SQL to drive efficient data solutions."
    ),
    resumeLink: "https://drive.google.com/file/d/1DF0rHtD-wVqRx9WoSF7EC7ses9XsEf6p/view?usp=drive_link",
    displayGreeting: true
};


const socialMediaLinks = {
    github: "https://github.com/ahmeriqbal10",
    linkedin: "https://www.linkedin.com/in/ahmer-iqbal-8a8464229/",
    gmail: "ahmer.iqbal1999@gmail.com",
    display: true
};

const skillsSection = {
    title: "What I do",
    subTitle: "DATA ENGINEER WITH PASSION TO LEARN MORE",
    skills: [
        emoji(
            "⚡ Data Pipeline Development: Design, build, and manage data pipelines to facilitate seamless data flow, ensuring efficient ETL/ELT processes."
        ),
        emoji(
            "⚡ Data Integration: Integrate diverse data sources, including SQL and NoSQL databases, to enable comprehensive data processing and analysis."
        ),
        emoji(
            "⚡ Big Data Processing: Utilize tools such as Apache Spark, PySpark, and Hadoop to handle and process large-scale datasets, optimizing performance."
        ),

        emoji(
            "⚡ Cloud-Based Solutions: Deploy and manage data workflows on cloud platforms like AWS and Google Cloud Platform (GCP) to enable scalable and reliable data solutions."
        )
    ],

    softwareSkills: [{
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },

        {
            skillName: "MongoDB",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "bootstrap",
            fontAwesomeClassname: "fab fa-bootstrap"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "fab fa-aws"
        },
        {
            skillName: "github",
            fontAwesomeClassname: "fab fa-github"
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },

    ],
    display: true
};


const educationInfo = {
    display: true,
    schools: [{
            schoolName: "Brandenburgische Technische Universität",
            logo: require("./assets/images/btu.png"),
            subHeader: "Master of Science in Artificial Intelligence",
            duration: "October 2023 - Present",
            descBullets: [
                "Focus on Machine Learning, Python, Data Science",

            ]
        },
        {
            schoolName: "University of Karachi (UBIT)",
            logo: require("./assets/images/UOK.png"),
            subHeader: "Bachelor of Science in Computer Science",
            duration: "2017 - 2021",
            descBullets: ["Focus on Data Structures, Web Technologies, Software Engineering, Database Systems, OOP Systems"]
        }
    ]
};

const techStack = {
    viewSkillBars: true,
    experience: [{
            Stack: "Frontend/Design",
            progressPercentage: "30%"
        },
        {
            Stack: "Backend",
            progressPercentage: "70%"
        },
        {
            Stack: "Programming",
            progressPercentage: "70%"
        },
        {
            Stack: "ML/AI",
            progressPercentage: "40%"
        },
    ],
    displayCodersrank: false
};



const workExperiences = {
    display: true,
    experience: [{
        role: "Associate Software/Data Engineer",
        company: "Tech Tactix LLC",
        companylogo: require("./assets/images/techtrax.png"),
        companyUrl: "https://techtactix.shop",
        date: "Jan 2022 – Feb 2023",
        desc: "translating UI/UX designs into responsive front-end code and developing robust back-end applications, while also working on data pipelines and beginner-level data engineering tasks.",
        descBullets: [
            "Successfully implemented responsive web interfaces that enhance user experience and cross-browser compatibility, leading to increased user engagement.",
            "Improved back-end application performance by optimizing Python code, contributing to faster load times and more maintainable systems.",

        ]
    }]
};


const openSource = {
    showGithubProfile: "true",
    display: true
};


const bigProjects = {
    title: "Projects",
    subtitle: "Some Projects that I have built during studies for final year project or for semester.",
    projects: [{
            image: require("./assets/images/DLR.png"),
            projectName: "Deep learning approach for cotton plant counting using drone images",
            projectDesc: "Trained a YoloV5 model using custom dataset of cotton fields and then integrated that model into react.js application",
            footerLink: [{
                name: "Link",
                url: ""
            }]
        },
        {
            image: require("./assets/images/mern.png"),
            projectName: "E-commerce store in MERN stack",
            projectDesc: "Built this full stack e-commerce store for a semester project. This includes backend, database and user authentication",
            footerLink: [{
                name: "Link",
                url: ""
            }]
        }
    ],
    display: true
};


const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Course completion certificates",

    achievementsCards: [{
            title: "SQL",
            subtitle: "Learned about how React.js works and DOM manipulation",
            image: require("./assets/images/essential.png"),
            imageAlt: "LinkedIn",
            footerLink: [{
                name: "Certification",
                url: ""
            }, ]
        },
        {
            title: "Python",
            subtitle: "Learned about React.js design patterns and components lifecycle",
            image: require("./assets/images/design.png"),
            imageAlt: "LinkedIn",
            footerLink: [{
                name: "Certification",
                url: ""
            }]
        },


    ],
    display: true
};






const resumeSection = {
    title: "Resume",
    subtitle: "Feel free to download my resume",
    display: true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Contact me now to discuss my portfolio in details",
    number: "+4917655441260",
    email_address: "ahmer.iqbal1999@gmail.com"
};



const twitterDetails = {
    userName: "twitter",
    display: true
};

const isHireable = false;
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
    contactInfo,
    twitterDetails,
    isHireable,
    resumeSection
};