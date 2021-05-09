import React from "react";
import clsx from "clsx";
import { bool, node, object, oneOf, string } from "prop-types";
import { Card, CardContent } from "@material-ui/core";

import useStyles from "./styles";

/**
 * Component to display the basic card
 *
 * @param {Object} props
 */
const CardBase = (props) => {
  const {
    withShadow,
    noShadow,
    noBorder,
    noBg,
    liftUp,
    children,
    align,
    className,
    cardContentProps,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Card
      className={clsx(
        "card-base",
        classes.root,
        withShadow ? classes.withShadow : {},
        noShadow ? classes.noShadow : {},
        noBorder ? classes.noBorder : {},
        noBg ? classes.noBg : {},
        liftUp ? classes.liftUp : {},
        className
      )}
      {...rest}
    >
      <CardContent
        className={clsx("card-base__content", classes.content, classes[align])}
        {...cardContentProps}
      >
        {children}
      </CardContent>
    </Card>
  );
};

CardBase.defaultProps = {
  align: "center",
  cardContentProps: {},
};

CardBase.propTypes = {
  /**
   * External classes
   */
  className: string,
  /**
   * The children content of the basic card
   */
  children: node.isRequired,
  /**
   * Whether to show custom shadow
   */
  withShadow: bool,
  /**
   * Whether to render the card without shadow
   */
  noShadow: bool,
  /**
   * Whether to hide the card borders
   */
  noBorder: bool,
  /**
   * Whether to show transparent background
   */
  noBg: bool,
  /**
   * Whether to lift up on hover
   */
  liftUp: bool,
  /**
   * The content alignment
   */
  align: oneOf(["left", "right", "center"]),
  /**
   * Additional props to pass to the CardContent component
   */
  cardContentProps: object,
};

export default CardBase;
