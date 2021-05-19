import { array } from "prop-types";
import { equals, prop } from "ramda";
import { isNilOrEmpty } from "ramda-adjunct";
import { Grid, Typography, Box } from "@material-ui/core";
import React, { useRef, useState } from "react";

import { formulesSection } from "../constants";
import SectionHeader from "../../../components/SectionHeader";
import CardBase from "../../../components/CardBase";
import useStyles from "./styles";

const Formules = ({ data }) => {
  const [selectedMenu, setSelectedMenu] = useState(prop("0", data));
  const classes = useStyles(selectedMenu?.menu?.length + 1 || 1);
  const boardRef = useRef(null);

  const isSelectedItem = (item) => equals(selectedMenu?.title, item?.title);

  if (isNilOrEmpty(data)) return null;

  const renderFormuleCard = (item) => (
    <Grid key={`formule-${item?.title}`} item xs={12} md={4}>
      <CardBase
        className={classes.formuleCard}
        liftUp={isSelectedItem(item)}
        noShadow
        variant="outlined"
        onClick={() => {
          setSelectedMenu(item);
          if (boardRef.current) {
            boardRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }}
      >
        <Box flexDirection="row" textAlign="center">
          <img src={"formule-icon.png"} width={100} alt={"Icon de formule"} />
          <Typography className={classes.textBold} variant="h5">
            {item?.title}
          </Typography>
          <Typography variant="subtitle1">{item?.description}</Typography>
        </Box>
      </CardBase>
    </Grid>
  );

  const renderDish = ({ label, description, price }) => (
    <Box key={`dish-${label}`} flexDirection={"column"} py={1}>
      <Typography color="secondary" variant="body1">
        {label}
      </Typography>
      {description && (
        <Typography color="secondary" variant="subtitle1">
          {description}
        </Typography>
      )}
      {price && (
        <Typography
          className={classes.textBold}
          color="secondary"
          variant="subtitle1"
        >{`${price}€`}</Typography>
      )}
    </Box>
  );

  const renderMenuSection = ({ title, dishes = [] }) => (
    <Grid
      key={`menu-section-${title}`}
      item
      container
      className={classes.menuSection}
      xs={12}
      md={selectedMenu?.menu?.length}
      direction="column"
      component={Box}
      p={2}
    >
      <Box>
        <Typography color="secondary" variant={"h3"}>
          {title}
        </Typography>
        {dishes.map(renderDish)}
      </Box>
    </Grid>
  );

  const renderTarifOption = ({ title, price }) => (
    <Grid
      key={`formule-tarif-${title}-${price}`}
      item
      container
      direction="row"
      component={Box}
      p={2}
      spacing={1}
      className={classes.tarifOption}
    >
      <Grid item>
        <Typography
          className={classes.textBold}
          color="secondary"
          variant={"body1"}
          pr={2}
        >{`${title}: `}</Typography>
      </Grid>
      <Grid item>
        <Typography
          color="secondary"
          variant={"body1"}
        >{`${price}€`}</Typography>
      </Grid>
    </Grid>
  );

  return (
    <Box m={3}>
      <SectionHeader
        title={formulesSection?.title}
        subtitles={formulesSection?.subtitles}
      />
      <Grid
        className={classes.formules}
        container
        spacing={4}
        wrap="nowrap"
        component={Box}
        justify="center"
      >
        {data.map(renderFormuleCard)}
      </Grid>
      <Grid
        ref={boardRef}
        className={classes.menuBackground}
        id="formule-board"
      >
        <Grid container justify="space-around">
          {!isNilOrEmpty(selectedMenu?.menu) &&
            selectedMenu.menu.map(renderMenuSection)}
        </Grid>
        <Grid container justify="center" component={Box} mt={4}>
          {!isNilOrEmpty(selectedMenu?.tarifOptions) &&
            selectedMenu.tarifOptions.map(renderTarifOption)}
        </Grid>
      </Grid>
    </Box>
  );
};

Formules.propTypes = {
  /**
   * data to be rendered
   */
  data: array.isRequired,
};

export default Formules;
