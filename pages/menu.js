import Menu from "../src/views/Menu";
import Main from "../src/layouts/Main";
import WithLayout from "../src/WithLayout";

const MenuPage = () => {
  return <WithLayout component={Menu} layout={Main} />;
};

export default MenuPage;
