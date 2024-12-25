import React from "react";

import PageLayout from "./PageLayout"; // Import the TabsSection component
import TabbedCards from "./TabbedCards";

const WorkExperience = () => {
  const tabs = [
    {
      label: "Infosys - Graduate Position",
      cards: [
        {
          title: "Bootcamp",
          content: [
            "Infosys is a multinational IT company, the first three months of my employment was a bootcamp in C#, Java, SQL, and Angular.",
            "The camp consisted of learning, with fortnighlty exams to assess our proficiency.",
            "I was already familiar with SQL, and although I knew Python the strict OOP and static typing of Java and C# was interesting to learn.",
          ],
        },
        {
          title: "Contract to BHP",
          content: [
            "I was contracted out to the multinational Australian mining and metals company, BHP, working on a platform that was used daily by the onsite miners and supervisors.",
            "The job was a mixture of Level 3 Operational Support and Software Development, where I would work through Service Now incident tickets as well as building and optimising features according to Jira tickets.",
          ],
        },
      ],
    },
    {
      label: "BHP - Operational Support",
      cards: [
        {
          title: "Debugging",
          content: [
            "Understanding the product and how our platform worked.",
            "Understanging the container infrastructure in production and investigating Cloudwatch logs and metrics.",
            "Understanding the codebase and how AWS insights related to the application.",
            "Analysing data and Django Admin records.",
          ],
        },
        {
          title: "Technical and Client-centric Roles",
          content: [
            "Scheduling and managing meetings.",
            "Cordinating and practically completing Service Now and Jira tickets.",
            "Writing bug fixes and liaising with clients.",
            "Collaborating with clients to understand their issues and the impact it has on their work.",
          ],
        },
      ],
    },
    {
      label: "BHP - Software Developer",
      cards: [
        {
          title: "Django and Graphene",
          content: [
            "Writing, refactoring, debugging, and optimising within Django's core features (views, serializers, models, admin, templates, etc).",
            "Optimising Graphene queries, mutations and resolvers.",
            "Debugging to identify and resolve bugs and expensive queries.",
            "Using fixutre sets in unit tests and testing environments to alleviate the overhead of prod dumps.",
          ],
        },
        {
          title: "React",
          content: [
            "Learning new concepts and patterns, like prop rendering and config objects.",
            "Learning new frontend tools like MUI, React Relay and Formik.",
            "Applying Typescript and unit testing to any new code produced.",
          ],
        },
        {
          title: "New Practices and Technologies",
          content: [
            "New Practices: Jira tickets, Sprints, Unit tests for every piece of work produced",
            "New Technologies: AWS, Docker, Terraform, Pre-commit",
          ],
        },
        {
          title: "Version Control in a Team",
          content: [
            "Implementing and learning from code reviews.",
            "Managing feature branches, rebasing, resolving merge conflicts.",
            "Reviewing and approving pull requests.",
          ],
        },
      ],
    },
  ];

  return (
    <PageLayout
      heading="Professional Experience"
      description="Experience in software development and operational support, with expertise in various technologies."
    >
      <TabbedCards tabs={tabs} defaultTab={2} />
    </PageLayout>
  );
};

export default WorkExperience;
