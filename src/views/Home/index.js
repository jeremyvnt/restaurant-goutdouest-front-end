import { Box, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import clsx from "clsx";

import HeroShaped from "../../components/HeroShaped";
import SectionHeader from "../../components/SectionHeader";
import SectionAlternate from "../../components/SectionAlternate";
import Image from "../../components/atoms/Image";
import Section from "../../components/Section";
import { heroData, section1Data, section2Data } from "./constants";
import useStyles from "./styles";

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const leftSideContent = (
    <SectionHeader
      title={heroData?.title}
      subtitles={heroData?.subtitles}
      align="left"
      titleProps={{
        variant: "h2",
        color: "textPrimary",
      }}
      data-aos="fade-right"
      disableGutter
      className={classes.leftSideContent}
    />
  );

  const rightSideContent = <div className={clsx(classes.imageAnimation)} />;

  return (
    <>
      <HeroShaped leftSide={leftSideContent} rightSide={rightSideContent} />
      <SectionAlternate>
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={12} md={6} data-aos={"fade-right"}>
            <SectionHeader
              title={section1Data?.title}
              subtitles={section1Data?.subtitles}
              align={isMd ? "left" : "center"}
              disableGutter
              titleVariant="h3"
              titleProps={{ className: classes.fontWeightBold }}
            />
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            xs={12}
            md={6}
            data-aos={"fade-left"}
          >
            <Box className={classes.sectionImageContainer}>
              <Image src={"cote.jpeg"} />
            </Box>
          </Grid>
        </Grid>
      </SectionAlternate>
      <Section>
        <Grid container justify="space-between" spacing={2}>
          <Grid
            item
            container
            alignItems="center"
            xs={12}
            md={6}
            data-aos={"fade-left"}
          >
            <Box className={classes.sectionImageContainer}>
              <Image src={"montagne.jpeg"} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} data-aos={"fade-right"}>
            <SectionHeader
              title={section2Data?.title}
              subtitles={section2Data?.subtitles}
              align={isMd ? "left" : "center"}
              disableGutter
              titleVariant="h3"
              titleProps={{ className: classes.fontWeightBold }}
            />
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
