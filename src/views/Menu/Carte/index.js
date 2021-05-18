import { array } from "prop-types";
import { Box, withStyles, Tab, Divider, Typography } from "@material-ui/core";
import { intersperse, isEmpty, map, pipe } from "ramda";
import React, { useState } from "react";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

import { carteSection } from "../constants";
import DishRow from "../../../components/DishRow";
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
  <TabList
    {...props}
    variant="scrollable"
    TabIndicatorProps={{ children: <span /> }}
  />
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

const Carte = ({ data }) => {
  const classes = useStyles();

  const [value, setValue] = useState(data[0]?.title);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTab = ({ title }) => <StyledTab label={title} value={title} />;

  const renderTabs = () => data.map(renderTab);

  const renderDish = ({ label, description, price }) => (
    <DishRow
      key={`dish-${label}-${price}`}
      title={label}
      subtitle={description}
      price={`${price}€`}
    />
  );

  const renderDishes = ({ title, list }) => (
    <TabPanel key={`menu-section-${title}`} p={3} value={title}>
      {isEmpty(list) && (
        <Box
          height={200}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant={"textSecondary"} color={"primary"}>
            Aucune information renseignée.
          </Typography>
        </Box>
      )}

      {!isEmpty(list) && pipe(map(renderDish), intersperse(<Divider />))(list)}
    </TabPanel>
  );

  return (
    <>
      <SectionHeader
        title={carteSection?.title}
        subtitles={carteSection?.subtitles}
      />
      <TabContext value={value}>
        <Box className={classes.demo2} p={2}>
          <StyledTabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            {renderTabs()}
          </StyledTabs>
        </Box>
        {!isEmpty(data) && data.map(renderDishes)}
      </TabContext>
    </>
  );
};

Carte.propTypes = {
  /**
   * data to be rendered
   */
  data: array.isRequired,
};

export default Carte;
