import { CardLayout, TextLayout } from "./CardLayout";
import { Description } from "./Descriptions";

const WorkExperience = () => (
  <CardLayout
    dMultiplier={1.3}
    pageReference="Work Experience"
    renderFunction={(description: Description[]) => (
      <>
        {description[0].sections.map((section) => (
          <TextLayout section={section} />
        ))}
      </>
    )}
  />
);

export default WorkExperience;
