import React from "react";
import "./About.css";
import profile from "../../images/Picture1.png";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-5 col-lg-6 col-xs-12 about-img">
            <img src={profile} alt="about-img" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I'm Nidhish Malviya, a driven Computer Science student
              specializing in Artificial Intelligence & Machine Learning at VIT
              Bhopal University. With a robust academic foundation, I recently
              completed a 5-month on-site internship as a Data Analyst at Ayu
              Health in Bangalore. Proficient in Python, MySQL, analytics, and
              Power BI, this experience provided me with practical insights into
              the dynamic field of data analytics. Beyond academia, sports are
              integral to my life, with active involvement in cricket, table
              tennis, and chess. These activities instill teamwork, strategy,
              and discipline. Additionally, I express my creativity through
              music and dance, showcasing skills in piano, singing, and dancing.
              My career aspirations lie in the Data Analytics and Data
              Engineering domains, where I aim to apply my technical expertise
              and practical experience. The synergy of my skills and diverse
              interests positions me as a well-rounded individual ready to make
              meaningful contributions in the evolving landscape of data.
              Excited about the future, I am eager to merge technology,
              analytics, and creativity to positively impact the field of data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
