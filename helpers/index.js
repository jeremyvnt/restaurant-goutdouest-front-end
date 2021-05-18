import {
  flatten,
  join,
  map,
  pathOr,
  pick,
  pipe,
  prop,
  propOr,
  values,
} from "ramda";
import { renameKeys } from "ramda-adjunct";

const emptyObject = {};

const extractListFrom = (data) =>
  map(
    pipe(
      pick(["titre", "description", "prix"]),
      renameKeys({ titre: "label", prix: "price" })
    )
  )(data);

const buildListItem = ({ categorie, mets = [] }) => {
  const title = categorie?.titre;
  const dishes = extractListFrom(mets) || [];

  return { title, dishes };
};

const buildTarifOption = ({ categories = [], prix }) => {
  const categoryTitles = flatten(
    map(pipe(pick(["titre"]), values))(categories)
  );

  const title = join(" / ", categoryTitles);

  return { title, price: prix };
};

export const sanitizeFormule = (formule) => {
  const title = pathOr(emptyObject, ["type", "titre"], formule);
  const description = propOr(null, "description", formule);
  const associations = propOr(emptyObject, "associations", formule);
  const tarifs = propOr(emptyObject, "tarifs", formule);

  const menu = map(buildListItem, associations);
  const tarifOptions = map(buildTarifOption, tarifs);

  return {
    title,
    description,
    menu,
    tarifOptions,
  };
};

export const sanitizeCarte = (carte) => {
  const drinks = propOr([], "boissons", carte);
  const dishes = propOr([], "mets", carte);

  const drinkList = drinks.map(({ categorie, boissons }) => {
    const title = prop("titre", categorie);

    const list = extractListFrom(boissons) || [];

    return { title, list };
  });

  const dishList = dishes.map(({ categorie, mets }) => {
    const title = prop("titre", categorie);

    const list = extractListFrom(mets);

    return { title, list };
  });

  return [...drinkList, ...dishList];
};
