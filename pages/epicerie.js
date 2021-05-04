import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    height: "auto",
    minHeight: 500,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    flex: 1,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  cardDescription: {
    padding: 50,
  },
  cardImage: {
    //objectFit: "contain",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const post = {
  image: "restaurant.jpeg",
  imageText: "restaurant",
  title: "Restaurant Goût d'Ouest",
  description:
    "La gastronomie de notre pays est extrêmement riche. Chaque région est fière de ses produits, de ses traditions culinaires.\n" +
    "                            Nul besoin de partir loin pour se faire plaisir:\n" +
    "                            De la Normandie aux Pyrénées, Goût d’Ouest Vous proposera modestement de petits plaisirs au bout de la fourchette.",
};

export default function Epicerie() {
  const classes = useStyles();

  return (
    <>
      {/*<Grid container spacing={3}>
            <Grid item xs={6}>
                <Grid className={classes.cardDescription} container direction={"column"} spacing={3}>
                    <Grid item>
                        <Typography component="h5" variant="h5">
                            Restaurant Goût d'Ouest
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" color="textSecondary">
                            La gastronomie de notre pays est extrêmement riche. Chaque région est fière de ses produits, de ses traditions culinaires.
                            Nul besoin de partir loin pour se faire plaisir:
                            De la Normandie aux Pyrénées, Goût d’Ouest Vous proposera modestement de petits plaisirs au bout de la fourchette.
                        </Typography>
                    <Grid>
                    <Grid item>
                        <Button color={"primary"}>Menu</Button>
                        <Button color={"primary"}>Épicerie</Button>

                    </Grid>
                </Grid>
            </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} style={{ height: 300 }} component={"div"}>
                <img className={classes.cardImage} src={"restaurant.jpeg"} />
            </Grid>
        </Grid>*/}

      <Paper
        className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src={post.image}
            alt={post.imageText}
          />
        }
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>

      {/*<Card className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Box>
                        <Typography component="h5" variant="h5">
                            Restaurant Goût d'Ouest
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            La gastronomie de notre pays est extrêmement riche. Chaque région est fière de ses produits, de ses traditions culinaires.
                            Nul besoin de partir loin pour se faire plaisir:
                            De la Normandie aux Pyrénées, Goût d’Ouest Vous proposera modestement de petits plaisirs au bout de la fourchette.
                        </Typography>
                        <Box>
                            <Button color={"primary"}>Menu</Button>
                            <Button color={"primary"}>Épicerie</Button>

                        </Box>
                    </Box>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                image="restaurant.jpeg"
                title="Live from space album cover"
            />
        </Card>*/}
    </>
  );
}
