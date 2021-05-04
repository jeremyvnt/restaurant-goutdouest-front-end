import Home from "../src/views/Home";
import Main from "../src/layouts/Main";
import WithLayout from "../src/WithLayout";

const HomePage = () => {
  return <WithLayout component={Home} layout={Main} />;
};

export default HomePage;
