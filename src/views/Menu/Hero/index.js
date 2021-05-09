import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Image from "../../../components/atoms/Image";
import { heroData } from "../constants";
import SectionHeader from "../../../components/SectionHeader";
import Section from "../../../components/Section";
import useStyles from "./styles";

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Image
        src="https://images.unsplash.com/photo-1568031813264-d394c5d474b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80"
        srcSet="https://images.unsplash.com/photo-1568031813264-d394c5d474b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80 2x"
        alt="Menu"
        className={classes.image}
        lazyProps={{ width: "100%", height: "100%" }}
      />
      <Section className={classes.section}>
        <SectionHeader
          title={heroData?.title}
          subtitles={heroData?.subtitles}
          align="left"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: "h3",
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
        />
      </Section>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
