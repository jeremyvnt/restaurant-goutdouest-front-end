import { array, string } from "prop-types";
import { Box, withStyles, Tab } from "@material-ui/core";
import React, { useState } from "react";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

import { carteSection } from "../constants";
import SectionHeader from "../../../components/SectionHeader";
import useStyles from "./styles";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#fff",
    },
  },
})((props) => (
  <TabList {...props} TabIndicatorProps={{ children: <span /> }} />
));

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const Carte = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /*

const renderDish = ({ label, description}) => (
  <Box key={`dish-${label}`} flexDirection={"column"} p={1}>
    <Typography variant="body1">{label}</Typography>
    <Typography variant="subtitle1">{description}</Typography>
  </Box>
);



const renderDishes = ({ title, dishes }) => (
  <Box key={`menu-section-${title}`} flexDirection={"column"} p={3}>
    {pipe(
      map(renderDish),
      intersperse(<Divider />)
    )(dishes)}
  </Box>
);

const renderMenuCardDish = ({ label, description, price}) => {

};

*/

  return (
    <>
      <SectionHeader
        title={carteSection?.title}
        subtitles={carteSection?.subtitles}
      />
      <TabContext value={value}>
        <Box className={classes.demo2} {...rest} p={2}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            <StyledTab label="Entrée" value="1" />
            <StyledTab label="Plats" value="2" />
            <StyledTab label="Desserts" value="3" />
            <StyledTab label="Boissons" value="4" />
          </StyledTabs>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
      </TabContext>
    </>
  );
};

Carte.propTypes = {
  /**
   * External classes
   */
  className: string,
  /**
   * data to be rendered
   */
  data: array.isRequired,
};

export default Carte;
