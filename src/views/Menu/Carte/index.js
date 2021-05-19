import { array } from "prop-types";
import { Box, withStyles, Tab, Divider, Typography } from "@material-ui/core";
import { intersperse, isEmpty, map, path, pipe } from "ramda";
import { isNilOrEmpty } from "ramda-adjunct";
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

  const [value, setValue] = useState(path([0, "title"], data));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTab = ({ title }) => <StyledTab label={title} value={title} />;

  const renderTabs = () => {
    if (isNilOrEmpty(data)) return null;
    return data.map(renderTab);
  };

  const renderDish = ({ label, description, price }) => (
    <DishRow
      key={`dish-${label}-${price}`}
      title={label}
      subtitle={description}
      price={`${price}€`}
    />
  );

  const renderDishes = ({ title, list }) => (
    <TabPanel
      key={`menu-section-${title}`}
      p={3}
      value={title}
      className={classes.tabpanel}
    >
      {isEmpty(list) && (
        <Box
          height={1}
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

  if (isNilOrEmpty(data)) {
    return (
      <>
        <SectionHeader
          title={carteSection?.title}
          subtitles={carteSection?.subtitles}
          className={classes.paddingTop}
        />
        <Box
          height={100}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant={"textSecondary"} color={"primary"}>
            Impossible d'afficher la carte, veuillez réessayer plus tard.
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <SectionHeader
        title={carteSection?.title}
        subtitles={carteSection?.subtitles}
      />
      <TabContext value={value}>
        <Box className={classes.demo2} p={2}>
          <StyledTabs value={value} onChange={handleChange} aria-label="tabs">
            {renderTabs()}
          </StyledTabs>
        </Box>
        {data.map(renderDishes)}
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
