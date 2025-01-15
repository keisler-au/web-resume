import { Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { DiPostgresql } from "react-icons/di";
import { FaAws, FaDocker, FaReact, FaLinux } from "react-icons/fa";
import { SiPrecommit, SiGithubactions } from "react-icons/si";
import { Link } from "react-router-dom";

import { PageData } from "../App";
import Header from "./Header";
import theme from "../theme";

interface TechIcon {
  [key: string]: {
    heading: string;
    icon: IconType | null;
    tabNumber: number;
  };
}

const techIcons: TechIcon = {
  Django: { heading: "Django:", icon: null, tabNumber: 0 },
  Git: { heading: "Git:", icon: null, tabNumber: 1 },
  Docker: { heading: "Docker:", icon: FaDocker, tabNumber: 2 },
  AWS: { heading: "AWS:", icon: FaAws, tabNumber: 3 },
  Postgres: { heading: "Django:", icon: DiPostgresql, tabNumber: 0 },
  Redis: { heading: "Redis:", icon: null, tabNumber: 3 },
  TypeScript: { heading: "React:", icon: null, tabNumber: 0 },
  "CI/CD": {
    heading: "CI/CD:",
    icon: SiGithubactions,
    tabNumber: 2,
  },
  "Pre-commit": { heading: "Pre-Commit:", icon: SiPrecommit, tabNumber: 1 },
  React: { heading: "React:", icon: FaReact, tabNumber: 0 },
  WSL: { heading: "Dependency Management:", icon: FaLinux, tabNumber: 2 },
};

// export const NavButton: React.FC<{
//   to: string;
//   label: string;
// }> = ({ to, label }) => {
//   return (
//     <Link
//       to={to}
//       style={{
//         textDecoration: "none",
//       }}
//     >
//       <Button
//         color="primary"
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 0.5,
//           fontSize: { xs: "1rem", sm: "1.2rem" },
//         }}
//       >
//         {label}
//         <div
//           style={{
//             backgroundColor: theme.palette.primary.main,
//             width: "8rem",
//             height: 1,
//           }}
//         ></div>
//       </Button>
//     </Link>
//   );
// };

const Home: React.FC<{ data: PageData }> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePhotoClick = () => {
    setIsExpanded((prev) => !prev);
  };
  console.log(data);
  return (
    <>
      <Header data={data.heading[0]} />
      <Box
        sx={{
          paddingTop: "5vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Box
          sx={{
            maxWidth: "60vw",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            // justifyContent: "space-between",
            // alignItems: "space-between",
            gap: { xs: 20, sm: 10 },
          }}
        >
          <Box width="100%" display="flex" justifyContent="center">
            <Box
              component="img"
              src="/cv_photo.jpg"
              alt="Profile Photo"
              onClick={handlePhotoClick}
              sx={{
                position: "absolute",
                width: isExpanded
                  ? { xs: "12rem", sm: "15rem", md: "18rem" }
                  : { xs: "8rem", sm: "10rem" },
                height: isExpanded
                  ? { xs: "12rem", sm: "15rem", md: "18rem" }
                  : { xs: "8rem", sm: "10rem" },
                transition: "all 0.3s ease-in-out",
                boxShadow: isExpanded
                  ? `0 0 15px ${theme.palette.primary.main}`
                  : "none",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 2,
              }}
            />
          </Box>
          <Typography
            color="secondary"
            sx={{
              maxWidth: "45vw",
              textAlign: { xs: "center", sm: "justify" },
            }}
          >
            {data.body[0].cards[0]?.content[0]?.description}
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: "60vw",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 3,
            // marginBottom: { xs: 2, sm: 3 },
          }}
        >
          {Object.keys(techIcons).map((label) => (
            <Link
              key={label}
              to={`/technical?tab=${techIcons[label].tabNumber}#${techIcons[label].heading}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                key={label}
                variant="outlined"
                sx={{
                  // padding: { xs: "0.6rem 1.2rem", sm: "0.8rem 1.5rem" },
                  color: theme.palette.secondary.main,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  "&:hover": {
                    border: `1px solid ${theme.palette.secondary.main}`,
                  },
                }}
              >
                {label}
              </Button>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
