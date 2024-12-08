import React from "react";

import { TextLayout } from "./CardLayout";
import { Description } from "./Descriptions";

const WebResume: React.FC<{ description: Description[] }> = ({
  description,
}) => <TextLayout section={description[0].sections[0]} />;

export default WebResume;
