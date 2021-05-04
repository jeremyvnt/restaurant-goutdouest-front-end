import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import useStyles from "./styles";

/**
 * Component to display the alternative sections
 *
 * @param {Object} props
 */
const SectionAlternate = (props) => {
  const { children, innerNarrowed, className, ...rest } = props;

  const classes = useStyles();

  return (
    <section
      className={clsx("section-alternate", classes.root, className)}
      {...rest}
    >
      <div
        className={clsx(
          "section-alternate__content",
          classes.inner,
          innerNarrowed ? classes.innerNarrowed : {}
        )}
      >
        {children}
      </div>
    </section>
  );
};

SectionAlternate.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section
   */
  children: PropTypes.node,
  /**
   * Should show narrow sections
   */
  innerNarrowed: PropTypes.bool,
};

export default SectionAlternate;
