import Formules from "./Formules";
import Hero from "./Hero";

import useStyles from "./styles";
import Carte from "./Carte";

export default function Menu({ formules, carte }) {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <Formules data={formules} className={classes.sectionPadding} />
      <Carte data={carte} />
    </div>
  );
}
