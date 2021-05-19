import { head, map } from "ramda";
import { isNilOrEmpty } from "ramda-adjunct";

import { getCarte, getFormules } from "../lib/api";
import { sanitizeCarte, sanitizeFormule } from "../helpers";
import Main from "../src/layouts/Main";
import Menu from "../src/views/Menu";
import WithLayout from "../src/WithLayout";

const MenuPage = (props) => {
  return <WithLayout component={Menu} layout={Main} {...props} />;
};

export default MenuPage;

export async function getStaticProps() {
  const formulesReponse = await getFormules();
  const carteResponse = await getCarte();

  const formulesData = formulesReponse?.data;
  const currentCarte = head(carteResponse?.data);

  if (isNilOrEmpty(formulesData) && isNilOrEmpty(carteResponse?.data))
    return { props: {} };

  const formules = !isNilOrEmpty(formulesData)
    ? map(sanitizeFormule, formulesData)
    : [];
  const carte = !isNilOrEmpty(currentCarte) ? sanitizeCarte(currentCarte) : [];

  return { props: { formules, carte } };
}
