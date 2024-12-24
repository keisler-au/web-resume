import React from "react";

import PageLayout from "./PageLayout"; // Import the TabsSection component
import TabbedCards from "./TabbedCards";

const WorkExperience = () => {
  const tabs = [
    {
      label: "Infosys Graduate Program",
      cards: [
        {
          title: "C#",
          content: ["Experience with C# for backend development."],
        },
        {
          title: "Java",
          content: ["Worked with Java to build scalable systems."],
        },
        {
          title: "SQL",
          content: ["Expertise in SQL for database management."],
        },
        {
          title: "Angular",
          content: ["Developed front-end components with Angular."],
        },
      ],
    },
    {
      label: "BHP Operational Support",
      cards: [
        {
          title: "AWS",
          content: ["Managed infrastructure on AWS for cloud-based services."],
        },
        {
          title: "ServiceNow",
          content: ["Experience using ServiceNow for incident management."],
        },
        { title: "Jira", content: ["Used Jira for agile project management."] },
        {
          title: "Debugging",
          content: ["Performed debugging on various production issues."],
        },
        {
          title: "Client",
          content: [
            "Collaborated with clients to understand their requirements.",
          ],
        },
        {
          title: "Django Admin",
          content: ["Worked with Django Admin for system configuration."],
        },
      ],
    },
    {
      label: "BHP Software Developer",
      cards: [
        {
          title: "Django",
          content: ["Built scalable applications using Django."],
        },
        {
          title: "Linux",
          content: ["Utilized Linux for server-side programming."],
        },
        { title: "React", content: ["Developed interactive UIs with React."] },
      ],
    },
  ];

  return (
    <PageLayout
      heading="Full-Stack Developer"
      description="Experience in software development and operational support, with expertise in various technologies."
    >
      <TabbedCards tabs={tabs} />
    </PageLayout>
  );
};

export default WorkExperience;
