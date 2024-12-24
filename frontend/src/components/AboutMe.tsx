import React from "react";

import PageLayout from "./PageLayout"; // Import the TabsSection component
import TabbedCards from "./TabbedCards";

const AboutMe = () => {
  const tabs = [
    {
      label: "Psychology Background",
      cards: [
        {
          title: "Psychology Degree",
          content: [
            "B.A. in Psychology, XYZ University",
            "Focus on behavioral analysis and research methods",
            "Why it Matters: Developed critical thinking and problem-solving skills through in-depth research.",
          ],
        },
        {
          title: "Research & Data Analysis",
          content: [
            "Experience with collecting and analyzing data.",
            "Why it Matters: Gained expertise in structured problem-solving, directly applicable to debugging code.",
          ],
        },
        {
          title: "Understanding User Behavior",
          content: [
            "Studied human decision-making and behavior.",
            "Why it Matters: Helps me design user-friendly interfaces and anticipate user needs.",
          ],
        },
        {
          title: "Effective Communication",
          content: [
            "Clear communication of complex ideas and research findings.",
            "Why it Matters: Strong communication skills enable collaboration with teams and stakeholders.",
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
            "Started learning web development and tech through online resources.",
            "Why it Matters: Demonstrated curiosity, determination, and the ability to learn independently.",
          ],
        },
        {
          title: "Mastering Core Tools",
          content: [
            "Learned technologies such as React, Docker, PostgreSQL.",
            "Why it Matters: Hands-on experience with essential tools for modern software development.",
          ],
        },
        {
          title: "Learning by Doing",
          content: [
            "Built personal projects to apply learned skills.",
            "Why it Matters: Real-world problem solving through hands-on experience.",
          ],
        },
        {
          title: "Lifelong Learning Mindset",
          content: [
            "Committed to staying up-to-date with new technologies.",
            "Why it Matters: Drives adaptability and continuous skill development in tech roles.",
          ],
        },
      ],
    },
  ];

  return (
    <PageLayout
      heading="Learning"
      description="I'm passionate about solving complex problems and building scalable, user-friendly applications. My background in psychology and self-learning in technology has given me a unique perspective on both technical and user-centered design."
    >
      <TabbedCards tabs={tabs} />
    </PageLayout>
  );
};

export default AboutMe;
