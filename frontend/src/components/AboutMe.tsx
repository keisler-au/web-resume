import React from "react";

import PageLayout from "./PageLayout"; // Import the TabsSection component
import TabbedCards from "./TabbedCards";

const AboutMe = () => {
  const tabs = [
    {
      label: "Psychology Degree",
      cards: [
        {
          title: "B.A. (Honours) in Psychology, Curtin University, WA",
          content: [
            "I started studying Psychology because I want to help people and I found the topic interesting. But being a professional psychologist is not who I want to be. I want to help people, and I am passionate about technology as a way to do that.",
          ],
        },
        {
          title: "Psychology Degree within IT",
          content: [
            "1. Critical thinking",
            "2. Learning from documentation and research papers",
            "3. Writing documentation and research papers",
            "4. How to prioritise assignments and meet deadlines ",
            "5. Organise projects and work with clients",
          ],
        },
        {
          title: "Awards and Key Projects",
          content: [
            "Letter of Commendation for outstanding academic performance, after achieving a grade average above 80%.",
            "Dissertation on a behavioural model for psychological well-being. It involved me recruiting and coordinating over 100 participants, who volunteered for a week-long data analysis.",
          ],
        },
      ],
    },
    {
      label: "Self-Learning",
      cards: [
        {
          title: "Becoming a Self-Taught Technologist",
          content: [
            "I started learning web development and tech through online resources. I quickly became enamoured by Python, and eventually my journey led me to JavaScript, CSS, SQL, and the common web-related technologies.",
            "Self-learning gave me the opportunity to better understand how I learn, explore my own curiosity, and develop the discipline and direction needed to understand the vast landscape of software development.",
          ],
        },
        {
          title: "Mastering Core Tools",
          content: [
            "Studying at university had given me tools for learning and building my own curriculum, but after 12 months I wanted hands-on experience and personally learn from other people. I wanted to put into practice my newly acquired skills, so I built a small Weather Report application. It's crude, it's naïve, and it's honest. I am glad to say I have learnt a lot since then, and I am still proud of what I was able to demonstrate at that time.",
          ],
        },
        {
          title: "The Weather App",
          content: [
            "The public API has since been decommissioned, but this project demonstrated my understanding of data fetching and structuring components within a project.",
            "https://keisler-au.github.io/weather-project/",
            "Embedded Website",
          ],
        },
      ],
    },
  ];

  return (
    <PageLayout
      heading="Learning"
      description="I am passionate about helping people and building scalable, user-friendly applications. My background in psychology at university and a self-learning style within IT has given me a unique technical and user-centric perspective."
    >
      <TabbedCards tabs={tabs} />
    </PageLayout>
  );
};

export default AboutMe;
