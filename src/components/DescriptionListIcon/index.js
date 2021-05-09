import React from "react";
import clsx from "clsx";
import { node, object, oneOf, string } from "prop-types";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";

/**
 * Component to display the description list with icon
 *
 * @param {Object} props
 */
const DescriptionListIcon = (props) => {
  const {
    title,
    subtitle,
    icon,
    align,
    titleVariant,
    subtitleVariant,
    className,
    titleProps,
    subtitleProps,
    ...rest
  } = props;

  const classes = useStyles();

  let gridJustify = "center";

  if (align === "left") {
    gridJustify = "flex-start";
  } else if (align === "right") {
    gridJustify = "flex-end";
  }

  return (
    <Grid
      container
      spacing={2}
      {...rest}
      className={clsx("description-list-icon", className)}
    >
      <Grid
        item
        container
        justify={gridJustify}
        xs={12}
        className="description-list-icon__icon-wrapper"
      >
        {icon}
      </Grid>
      <Grid item xs={12} className="description-list-icon__title-wrapper">
        <Typography
          variant={titleVariant}
          color="textPrimary"
          align={align}
          className={clsx(classes.title, "description-list-icon__title")}
          {...titleProps}
        >
          {title}
        </Typography>
      </Grid>
      {subtitle && (
        <Grid item xs={12} className="description-list-icon__subtitle-wrapper">
          <Typography
            variant={subtitleVariant}
            color="textSecondary"
            align={align}
            className="description-list-icon__subtitle"
          >
            {subtitle}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

DescriptionListIcon.defaultProps = {
  align: "center",
  titleVariant: "h6",
  subtitleVariant: "body1",
  titleProps: {},
  subtitleProps: {},
};

DescriptionListIcon.propTypes = {
  /**
   * External classes
   */
  className: string,
  /**
   * The title
   */
  title: string.isRequired,
  /**
   * the subtitle
   */
  subtitle: string,
  /**
   * Whether should show the alternate icon
   */
  icon: node.isRequired,
  /**
   * The alignment of the items
   */
  align: oneOf(["left", "right", "center"]),
  /**
   * Title variant
   */
  titleVariant: string,
  /**
   * Subtitle variant
   */
  subtitleVariant: string,
  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: object,
  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: object,
};

export default DescriptionListIcon;
