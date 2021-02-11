import { Box, Typography } from '@material-ui/core';
import React from "react";
import pic from "./reducedSelf.png";


function About () {
  return (
        <section id="about-me">
          <Typography variant='h4'>
            <Box lineHeight={2} m={0}>
              About Me
            </Box>
          </Typography>
          <hr />
          <img
            src={pic}
            className="img-fluid float-left p-4"
            alt="me"
          />
          <p className="p-4">
            My name is Ben. As a recent graduate of the University of Kansas Full-Stack coding bootcamp, I have new skills in JavaScript, React.js, Node.js and responsive web design. Being a self-starter and intellectual, I also enjoy learning new skills and collaborating in teams to maintain and create web applications. A bachelor’s degree in education and 5 years as a Systems Engineer give me a great foundation to build my skills upon. Working in education, healthcare and government give me inside background knowledge to create effective and user-first web applications. I enjoy writing code and employing new technologies to improve the efficiency, effectiveness and quality of the product and business.
          </p>
        </section>
  )
}

export default About;