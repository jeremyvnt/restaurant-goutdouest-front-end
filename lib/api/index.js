import axios from "axios";

export const getFormules = () => {
  const route = `${process.env.NEXT_PUBLIC_API_URL}/formules`;

  return axios.get(route, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  });
};

export const getCarte = () => {
  const route = `${process.env.NEXT_PUBLIC_API_URL}/cartes`;
  return axios.get(route, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  });
};
