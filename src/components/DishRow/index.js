import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

import useStyles from "./styles";

const DishRow = (props) => {
  const {
    title,
    subtitle,
    price,
    priceProps,
    titleProps,
    subtitleProps,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Box
      className={clsx(classes.root, "card-job-minimal")}
      {...rest}
      marginRight={{ xs: 0, md: 5 }}
    >
      <div
        className={clsx(classes.cardJobMinimalBody, "card-job-minimal__body")}
      >
        <div className="card-job-minimal__title-container">
          <Typography
            variant="subtitle1"
            className={clsx(classes.bold, "card-job-minimal__title")}
            {...titleProps}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className="card-job-minimal__location"
            {...subtitleProps}
          >
            {subtitle}
          </Typography>
        </div>
        <div className="card-job-minimal__location-container">
          <Typography
            variant="body2"
            color="primary"
            className={classes.bold}
            {...priceProps}
          >
            {price}
          </Typography>
        </div>
      </div>
    </Box>
  );
};

DishRow.defaultProps = {
  subtitle: null,
  subtitleProps: {},
  titleProps: {},
};

DishRow.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Job title of the card
   */
  title: PropTypes.string.isRequired,
  /**
   * Job subtitle of the card
   */
  subtitle: PropTypes.string,
  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: PropTypes.object,
  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: PropTypes.object
  /**
   * Additional props to pass to the price Typography component
   */,
  priceProps: PropTypes.object,
};

export default DishRow;
