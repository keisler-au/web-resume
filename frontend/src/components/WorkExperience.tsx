import React from "react";

import { CardLayout, TextLayout } from "./CardLayout";
import { Description } from "./Descriptions";

const WorkExperience: React.FC<{ description: Description[] }> = ({
  description,
}) => (
  <>
    {description[0].sections.map((section, index) => (
      <TextLayout key={index} section={section} />
    ))}
  </>
);

export default WorkExperience;
