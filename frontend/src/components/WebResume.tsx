import { CardLayout, TextLayout } from "./CardLayout";
import { Description } from "./Descriptions";

const WebResume = () => (
  <CardLayout
    dMultiplier={1.4}
    pageReference="Web Resume"
    renderFunction={(description: Description[]) => (
      <TextLayout section={description[0].sections[0]} />
    )}
  />
);

export default WebResume;
