import Epicerie from "../src/views/Epicerie";
import Main from "../src/layouts/Main";
import WithLayout from "../src/WithLayout";

const EpiceriePage = () => {
  return <WithLayout component={Epicerie} layout={Main} />;
};

export default EpiceriePage;
