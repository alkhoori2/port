import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a dedicated double major in Computer Science and Mathematics at Indiana University Bloomington, specializing in Artificial Intelligence. With a strong focus on integrating academic knowledge with technical skills in real-world applications, I am passionate about leveraging technology to tackle complex problems and innovate solutions. My experience includes developing machine learning models, creating AI-driven projects, and collaborating with teams to build sophisticated software applications. I am actively seeking opportunities to apply my expertise in a challenging and dynamic environment, contributing to the advancement of cutting-edge technologies.
      </motion.p>

      {/* <div className="mt-8">
        <a
          href="/path/to/your/cv.pdf"  // Replace with the actual path to your CV
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-[20px] shadow-lg hover:bg-secondary transition duration-300"
        >
          Download CV
        </a>
      </div> */}

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-white font-bold text-[24px]">Education</h3>
          <div className="mt-5">
            <h4 className="text-white text-[20px]">Indiana University Bloomington (IUB)</h4>
            <p className="text-secondary">Spring 2022 - Fall 2025</p>
            <p>Computer Science B.S. (with Specialization in AI) Mathematics B.S.</p>
          </div>
          <div className="mt-5">
            <h4 className="text-white text-[20px]">The International School of Choueifat - Al Ain</h4>
            <p className="text-secondary">2007 - 2020</p>
            <p className="text-white">High School Diploma</p>
          </div>
          <div className="mt-5">
            <h4 className="text-white text-[20px]">Awards and Certificates:</h4>
            <ul className="list-disc ml-5 mt-2">
              <li>Abu Dhabi Investment Authority (ADIA) Scholarship Program Recipient</li>
              <li>Completed Wharton’s Business Program on the Future of Business (University of Pennsylvania)</li>
              <li>Pre-CFA Course Completion (June 2024 - July 2024)</li>
              <li>Certificate of Excellence Awarded by ADIA (2019)</li>
              <li>Brewster Academy's Summer Program</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-[24px]">University Involvement</h3>
          <div className="mt-5">
            <h4 className="text-white text-[20px]">Computer Science Club at IU</h4>
            <p className="text-secondary">March 2023 – Ongoing</p>
            <p>Developed a machine learning model using Python to classify and recognize images from a dataset, focusing on accuracy and efficiency.</p>
            <p>Helped create a 3D game using Unity and Python, focusing on game mechanics and user engagement.</p>
          </div>
          <div className="mt-5">
            <h4 className="text-white text-[20px]">AI Futures Club at IU</h4>
            <p className="text-secondary">August 2022 – Ongoing</p>
            <p>Moderated and attended panel discussions on the future of work and play in an AI-driven world.</p>
            <p>Developed AI projects demonstrating AI’s role in transforming work and leisure activities.</p>
          </div>
          <div className="mt-5">
            <h4 className="text-white text-[20px]">Chess AI Project</h4>
            <p className="text-secondary">Java and GitHub</p>
            <p>Developed a sophisticated chess AI with a team of four using Java.</p>
            <p>Implemented data pruning to optimize decision-making and focus on strategic moves.</p>
            <p>Combined the minimax algorithm with Java’s object-oriented design for strategic gameplay.</p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
