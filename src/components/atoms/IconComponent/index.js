import { oneOf, string } from "prop-types";
import clsx from "clsx";
import NoSsr from "@material-ui/core/NoSsr";
import React from "react";

import useStyles from "./styles";

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const Icon = (props) => {
  const { fontIconClass, size, fontIconColor, className, ...rest } = props;

  const classes = useStyles();

  return (
    <NoSsr>
      <i
        className={clsx("icon", fontIconClass, classes[size], className)}
        style={{ color: fontIconColor }}
        {...rest}
      />
    </NoSsr>
  );
};

Icon.defaultProps = {
  size: "small",
};

Icon.propTypes = {
  /**
   * External classes
   */
  className: string,
  /**
   * The classes of the font icon
   */
  fontIconClass: string.isRequired,
  /**
   * Source set for the responsive images
   */
  size: oneOf(["extraSmall", "small", "medium", "large"]),
  /**
   * Color of the icon
   */
  fontIconColor: string,
};

export default Icon;
