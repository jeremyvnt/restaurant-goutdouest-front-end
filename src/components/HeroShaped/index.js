import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Divider } from "@material-ui/core";
import Section from "../Section";

import useStyles from "./styles";

/**
 * Component to display the shaped hero
 *
 * @param {Object} props
 */
const HeroShaped = (props) => {
  const { leftSide, rightSide, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, "hero-shaped", className)} {...rest}>
      <div className={clsx("hero-shaped__wrapper", classes.hero)}>
        <Section
          className={clsx("hero-shaped__left-side", classes.heroLeftSide)}
        >
          {leftSide}
        </Section>
        <div className={clsx("hero-shaped__right-side", classes.heroRightSide)}>
          <div className={clsx("hero-shaped__cover", classes.heroCover)}>
            <div
              className={clsx(
                "hero-shaped__image-container",
                classes.heroImageContainer
              )}
            >
              <div className={clsx("hero-shaped__image", classes.heroImage)}>
                {rightSide}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

HeroShaped.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section right side
   */
  rightSide: PropTypes.node.isRequired,
  /**
   * Children to placed inside the section left side
   */
  leftSide: PropTypes.node.isRequired,
};

export default HeroShaped;
