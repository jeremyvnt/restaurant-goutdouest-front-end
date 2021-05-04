import React from "react";
import clsx from "clsx";
import {
  arrayOf,
  bool,
  node,
  oneOf,
  oneOfType,
  object,
  string,
} from "prop-types";
import { Box, Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";

/**
 * Component to display the section headers
 *
 * @param {Object} props
 */
const SectionHeader = (props) => {
  const {
    title,
    titleVariant,
    subtitleVariant,
    subtitles,
    subtitleColor,
    label,
    overline,
    fadeUp,
    align,
    ctaGroup,
    disableGutter,
    titleClasses,
    className,
    labelProps,
    titleProps,
    subtitleProps,
    ...rest
  } = props;

  const classes = useStyles();
  let justifyGrid = "center";
  if (align === "left") {
    justifyGrid = "flex-start";
  } else if (align === "right") {
    justifyGrid = "flex-end";
  }

  return (
    <Grid
      container
      spacing={2}
      data-aos={fadeUp ? "fade-up" : ""}
      className={clsx(
        "section-header",
        classes.root,
        disableGutter ? classes.disableGutter : {},
        className
      )}
      {...rest}
    >
      {overline && (
        <Grid
          item
          container
          justify={justifyGrid}
          xs={12}
          className="section-header__overline-wrapper"
        >
          {overline}
        </Grid>
      )}
      {label && (
        <Grid item xs={12} className="section-header__label-wrapper">
          <Typography
            variant="overline"
            color="primary"
            component="p"
            align={align || "center"}
            {...labelProps}
          >
            {label}
          </Typography>
        </Grid>
      )}
      <Grid item xs={12} className="section-header__title-wrapper">
        <Typography
          variant={titleVariant}
          align={align || "center"}
          className={clsx(
            "section-header__title",
            classes.title,
            titleClasses ? titleClasses : {}
          )}
          color="textPrimary"
          {...titleProps}
        >
          {title}
        </Typography>
      </Grid>
      {subtitles && (
        <Grid item xs={12} className="section-header__subtitle-wrapper">
          {subtitles.map((subtitle) => (
            <Box m={1} key={`subtitle-${subtitle}`}>
              <Typography
                variant={subtitleVariant || "h6"}
                align={align || "center"}
                color={subtitleColor || "textSecondary"}
                className="section-header__subtitle"
                {...subtitleProps}
              >
                {subtitle}
              </Typography>
            </Box>
          ))}
        </Grid>
      )}
      {ctaGroup && ctaGroup.length && (
        <Grid item xs={12} className="section-header__cta-wrapper">
          <Grid
            container
            justify={justifyGrid}
            alignItems="center"
            wrap="nowrap"
            className="section-header__cta-container"
          >
            {ctaGroup.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "section-header__cta-item-wrapper",
                  classes.cta
                )}
              >
                {item}
              </div>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

SectionHeader.defaultProps = {
  titleVariant: "h4",
  labelProps: {},
  titleProps: {},
  subtitleProps: {},
};

SectionHeader.propTypes = {
  /**
   * External classes
   */
  className: string,
  /**
   * Title of the section header
   */
  title: oneOfType([string, node]).isRequired,
  /**
   * Subtitle of the section header
   */
  subtitles: arrayOf(oneOfType([string, node])),
  /**
   * Label title of the section header
   */
  label: string,
  /**
   * The overline component in the section header
   */
  overline: node,
  /**
   * Array of the CTAs
   */
  ctaGroup: arrayOf(node),
  /**
   * Whether to fade up on scroll
   */
  fadeUp: bool,
  /**
   * Header content (title, subtitle, CTAs) alignment
   */
  align: oneOf(["right", "left", "center"]),
  /**
   * Whether to disable bottom margin of the section
   */
  disableGutter: bool,
  /**
   * Styles classes to be attached to the title from the parent component
   */
  titleClasses: string,
  /**
   * Title variant
   */
  titleVariant: oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  /**
   * SubTitle variant
   */
  subtitleVariant: oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
  ]),
  /**
   * SubTitle color
   */
  subtitleColor: oneOf([
    "textPrimary",
    "textSecondary",
    "primary",
    "secondary",
  ]),
  /**
   * Additional properties to pass to the label Typography component
   */
  labelProps: object,
  /**
   * Additional properties to pass to the title Typography component
   */
  titleProps: object,
  /**
   * Additional properties to pass to the subtitle Typography component
   */
  subtitleProps: object,
};

export default SectionHeader;
