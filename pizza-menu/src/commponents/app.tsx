import { Header } from "./modules/header/header";
import { Footer } from "./modules/footer/footer";
import { Menu } from "./modules/menu/menu";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};
