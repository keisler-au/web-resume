import { Box } from "@mui/material";

import DescriptionList from "./Description";
import { pageReferences } from "../constants";

const Infosys = () => {
  return (
    <Box>
      <DescriptionList pageReference={pageReferences.infosys} />
    </Box>
  );
};

export default Infosys;
