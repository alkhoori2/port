import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  adia,
  codeatiu,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  uaeclub,
  java,
  python,
  clanguage,
  stockpredict,
  leastsquare,
  chessai,
  r,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Computer Science Student",
    icon: web,
  },
  {
    title: "AI Enthusiast",
    icon: mobile,
  },
  {
    title: "Mathematics Student",
    icon: backend,
  },
  {
    title: "Quantitative thinker",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C Language",
    icon: clanguage,
  },
  {
    name: "R",
    icon: r,
  },
];

const experiences = [
  {
    title: "IT Department Intern",
    company_name: "Abu Dhabi Investment Authority (ADIA)",
    icon: adia,
    iconBg: "#383E56",
    date: "June 2024 - August 2024 (S1 24)",
    points: [
      "More details to come.",
      "More details to come.",
      "More details to come.",
      "More details to come.",
    ],
  },
  {
    title: "Director of Technology",
    company_name: "Code@IU Club at Indiana University",
    icon: codeatiu,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present (SP 24 - FA 24)",
    points: [
      "Provided support and advice on solving LeetCode problems and other coding challenges to prepare for interviews with top tech companies like FAANG.",
      "Organized and led workshops and study groups to enhance technical skills and problem-solving abilities.",
      "Assisted club members in professional portfolio development, including LinkedIn profiles and website e-portfolios.",
      "Kept the club informed on the latest technological trends and news globally, fostering a culture of continuous learning and innovation.",
    ],
  },
  {
    title: "Officer",
    company_name: "UAE Students Club at Indiana University",
    icon: uaeclub,
    iconBg: "#383E56",
    date: "Sep 2023 - Present (FA 23)",
    points: [
      "Organized events to promote UAE culture and traditions.",
      "Raised awareness about Emirati culture through various initiatives.",
      "Engaged members and the broader university community in cultural activities.",
      "Collaborated with other student organizations for multicultural events.",
    ],
  },
  {
    //title: "Full stack Developer",
    //company_name: "Meta",
    //icon: meta,
    iconBg: "#E6DEDD",
    //date: "Jan 2023 - Present",
    points: [
      "More details to come.",
      "More details to come.",
      "More details to come.",
      "More details to come.",
    ],
  },

  {
    //title: "Full stack Developer",
    //company_name: "Meta",
    //icon: meta,
    iconBg: "#E6DEDD",
    //date: "Jan 2023 - Present",
    points: [
      "More details to come.",
      "More details to come.",
      "More details to come.",
      "More details to come.",
    ],
  }

  

  
];

const testimonials = [
  {
    testimonial:
      "To go wrong in one's own way is better than to go right in someone else's.",
    name: "Fyodor Dostoevsky",
    designation: "Russian novelist",
    company: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Dostoevsky_1872.jpg",
  },
  {
    testimonial:
      "I find that the harder I work, the more luck I seem to have.",
    name: "Thomas Jefferson",
    designation: "3rd U.S. President",
    company: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Thomas_Jefferson_by_Rembrandt_Peale%2C_1800.jpg",
  },
  {
    testimonial:
      "Each person must live their life as a model for others.",
    name: "Rosa Parks",
    designation: "American Activist",
    company: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Rosaparks.jpg",
  },

  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Stock Prediction using recurrent neural networks and ML",
    description:
      "In this project, I developed a machine learning model utilizing recurrent neural networks (RNNs) to predict stock prices. By analyzing historical data from the previous n days, the model accurately forecasts the next day’s price. This project demonstrates the application of advanced algorithms in financial markets, providing valuable insights for investors and showcasing the power of RNNs in time series analysis.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "StockPrediction",
        color: "pink-text-gradient",
      },
    ],
    image: stockpredict,
    source_code_link: "https://github.com/",
  },
  {
    name: "Data Modeling with Least Squares Precision",
    description:
      "This project explores the method of least squares, a key technique in statistics and computer science. By implementing the algorithm, I calculated the best-fit line for a dataset, minimizing squared residuals. This showcases the application of mathematical concepts in data analysis, revealing insights into data relationships and predictive capabilities. Through coding and practical examples, I demonstrated its versatility in regression analysis and its importance in fields like economics and machine learning.",
    tags: [
      {
        name: "Mathematics",
        color: "blue-text-gradient",
      },
      {
        name: "Statistics",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "pink-text-gradient",
      },
    ],
    image: leastsquare,
    source_code_link: "https://github.com/",
  },
  {
    name: "Chess AI",
    description:
      "In this group project, I honed my leadership skills while developing an advanced chess AI. We implemented the minimax algorithm, along with other techniques, to create a competitive chess engine. This project not only improved my technical skills in game theory and AI development but also emphasized the importance of teamwork and effective communication in a collaborative environment.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "MiniMax",
        color: "pink-text-gradient",
      },
    ],
    image: chessai,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
