import { array, string } from "prop-types";
import { equals } from "ramda";
import { isNilOrEmpty } from "ramda-adjunct";
import {
  useMediaQuery,
  Grid,
  colors,
  Typography,
  Box,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { useState } from "react";

import { formulesSection } from "../constants";
import Icon from "../../../components/atoms/IconComponent";
import SectionHeader from "../../../components/SectionHeader";
import DescriptionListIcon from "../../../components/DescriptionListIcon";
import CardBase from "../../../components/CardBase";
import useStyles from "./styles";

const Formules = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const [selectedMenu, setSelectedMenu] = useState(
    isNilOrEmpty(data) ? undefined : data[0]
  );
  const isSelectedItem = (item) => equals(selectedMenu?.title, item?.title);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  if (isNilOrEmpty(data)) return null;

  const renderDish = ({ label, description }) => (
    <Box key={`dish-${label}`} flexDirection={"column"} p={1}>
      <Typography variant="body1">{label}</Typography>
      <Typography variant="subtitle1">{description}</Typography>
    </Box>
  );

  const renderMenuSection = ({ title, dishes }) => (
    <Box key={`menu-section-${title}`} flexDirection={"column"} p={3}>
      <Typography variant={"h3"}>{title}</Typography>
      {dishes.map(renderDish)}
    </Box>
  );

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={formulesSection?.title}
        subtitles={formulesSection?.subtitles}
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} md={4} key={index} data-aos="fade-up">
            <CardBase
              className={classes.formuleCard}
              liftUp={isSelectedItem(item)}
              noShadow
              variant="outlined"
              onClick={() => setSelectedMenu(item)}
            >
              <DescriptionListIcon
                icon={
                  <Icon
                    size="large"
                    fontIconClass={item.icon}
                    fontIconColor={colors.yellow[700]}
                  />
                }
                title={item.title}
                subtitle={item.subtitle}
                align="left"
              />
            </CardBase>
          </Grid>
        ))}
      </Grid>
      <Box m={4}>
        {!isNilOrEmpty(selectedMenu) &&
          !isNilOrEmpty(selectedMenu.menu) &&
          selectedMenu.menu.map(renderMenuSection)}
      </Box>
    </div>
  );
};

Formules.propTypes = {
  /**
   * External classes
   */
  className: string,
  /**
   * data to be rendered
   */
  data: array.isRequired,
};

export default Formules;
