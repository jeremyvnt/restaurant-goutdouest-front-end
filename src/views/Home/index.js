/* eslint-disable max-lines-per-function */
import { Box, Button, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import clsx from "clsx";

import HeroShaped from "../../components/HeroShaped";
import SectionHeader from "../../components/SectionHeader";
import SectionAlternate from "../../components/SectionAlternate";
import Image from "../../components/atoms/Image";
import Section from "../../components/Section";
import {
  epiceriePreview,
  heroData,
  menuPreview,
  section1Data,
  section2Data,
} from "./constants";
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
      <Section>
        <SectionHeader
          title={menuPreview?.title}
          subtitles={menuPreview?.subtitles}
          align="left"
          titleProps={{
            variant: "h3",
            color: "textPrimary",
          }}
          data-aos="fade-right"
          disableGutter
          ctaGroup={[
            <Button
              href={"/menu"}
              color="primary"
              variant="contained"
              size="large"
            >
              Découvrez notre carte
            </Button>,
          ]}
        />
      </Section>
      <div className={classes.shape}>
        <SectionAlternate>
          <Grid container justify="space-between" spacing={2}>
            <Grid item xs={12} md={6} data-aos={"fade-right"}>
              <SectionHeader
                title={section1Data?.title}
                subtitles={section1Data?.subtitles}
                align={isMd ? "left" : "center"}
                disableGutter
                titleVariant="h3"
                titleProps={{ className: classes.fontWeight900 }}
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
                <Image
                  className={classes.imageSection}
                  srcset="cote.jpeg?nf_resize=fit&w=320 320w,
                          cote.jpeg?nf_resize=fit&w=480 480w,
                          cote.jpeg?nf_resize=fit&w=600 600w"
                  sizes="(max-width: 320px) 280px,
                         (max-width: 480px) 440px,
                         600px"
                  src={"cote.jpeg?nf_resize=fit&w=600"}
                />
              </Box>
            </Grid>
          </Grid>
        </SectionAlternate>
        <Section className={classes.sectionNoPaddingTop}>
          <Grid container justify="space-between" spacing={2}>
            <Grid
              item
              container
              alignItems="center"
              justify="center"
              xs={12}
              md={6}
              data-aos={"fade-left"}
            >
              <Box className={classes.sectionImageContainer}>
                <Image
                  className={classes.imageSection}
                  srcset="montagne.jpeg?nf_resize=fit&w=320 320w,
                          montagne.jpeg?nf_resize=fit&w=480 480w,
                          montagne.jpeg?nf_resize=fit&w=600 600w"
                  sizes="(max-width: 320px) 280px,
                         (max-width: 480px) 440px,
                         600px"
                  src={"montagne.jpeg?nf_resize=fit&w=600"}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos={"fade-right"}>
              <SectionHeader
                title={section2Data?.title}
                subtitles={section2Data?.subtitles}
                align={isMd ? "left" : "center"}
                disableGutter
                titleVariant="h3"
                titleProps={{ className: classes.fontWeight900 }}
              />
            </Grid>
          </Grid>
        </Section>
      </div>
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
              <Image
                className={classes.imageSection}
                srcset="epicerie.jpeg?nf_resize=fit&w=320 320w,
                          epicerie.jpeg?nf_resize=fit&w=480 480w,
                          epicerie.jpeg?nf_resize=fit&w=600 600w"
                sizes="(max-width: 320px) 280px,
                         (max-width: 480px) 440px,
                         600px"
                src={"epicerie.jpeg?nf_resize=fit&w=600"}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} data-aos={"fade-right"}>
            <SectionHeader
              title={epiceriePreview?.title}
              subtitles={epiceriePreview?.subtitles}
              align={isMd ? "left" : "center"}
              disableGutter
              titleVariant="h3"
              titleProps={{ className: classes.fontWeight900 }}
              ctaGroup={[
                <Button
                  href={"/epicerie"}
                  color="primary"
                  variant="contained"
                  size="large"
                >
                  Découvrez notre épicerie
                </Button>,
              ]}
            />
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
