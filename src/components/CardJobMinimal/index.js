import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { colors, Typography } from "@material-ui/core";
import Icon from "../../components/atoms/Icon";

import useStyles from "./styles";

/**
 * Component to display the job card company
 *
 * @param {Object} props
 */
const CardJobMinimal = (props) => {
  const {
    title,
    subtitle,
    showArrow,
    titleProps,
    subtitleProps,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, "card-job-minimal")} {...rest}>
      <div
        className={clsx(classes.cardJobMinimalBody, "card-job-minimal__body")}
        style={!showArrow ? { marginRight: 0 } : {}}
      >
        <div className="card-job-minimal__title-container">
          <Typography
            variant="subtitle1"
            className={clsx(classes.title, "card-job-minimal__title")}
            {...titleProps}
          >
            {title}
          </Typography>
        </div>
        <div className="card-job-minimal__location-conatiner">
          <Typography
            variant="body2"
            color="textSecondary"
            className="card-job-minimal__location"
            {...subtitleProps}
          >
            {subtitle}
          </Typography>
        </div>
      </div>
      {showArrow ? (
        <div className="card-job-minimal__arrow-container">
          <Icon
            fontIconClass="fas fa-angle-right"
            fontIconColor={colors.grey[700]}
            className="card-job-minimal__arrow"
          />
        </div>
      ) : null}
    </div>
  );
};

CardJobMinimal.defaultProps = {
  showArrow: false,
  titleProps: {},
  subtitleProps: {},
};

CardJobMinimal.propTypes = {
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
  subtitle: PropTypes.string.isRequired,
  /**
   * Should show arrow or not
   */
  showArrow: PropTypes.bool,
  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: PropTypes.object,
  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: PropTypes.object,
};

export default CardJobMinimal;
