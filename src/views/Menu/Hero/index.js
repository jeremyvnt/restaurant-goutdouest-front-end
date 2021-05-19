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
        src={
          "https://images.unsplash.com/photo-1519700450941-b528d696744b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
        }
        srcset="https://images.unsplash.com/photo-1519700450941-b528d696744b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80 320w,
                https://images.unsplash.com/photo-1519700450941-b528d696744b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80480w,
                https://images.unsplash.com/photo-1519700450941-b528d696744b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80 800w"
        alt="Menu"
        className={classes.image}
      />
      {/*      <Image
        srcset="restaurant.jpeg?nf_resize=fit&w=320 320w,
                restaurant.jpeg?nf_resize=fit&w=480 480w,
                restaurant.jpeg?nf_resize=fit&w=800 800w"
        sizes="(max-width: 320px) 280px,
               (max-width: 480px) 440px,
               800px"
        src={"restaurant.jpeg?nf_resize=fit&w=800"}
        alt="Menu"
        className={classes.image}
        lazyProps={{ width: "100%", height: "100%" }}
      />*/}
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
