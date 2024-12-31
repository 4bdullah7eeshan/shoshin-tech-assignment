import MenuSection from "../MenuSection/MenuSection";
import mainMenuItems from "../../utils/data/mainMenuItems";
import otherMenuItems from "../../utils/data/otherMenuItems";

const Menus = () => {
    return (
      <nav className="menu">
        <ul>
          <MenuSection title="Main Menu" items={mainMenuItems} />
          <MenuSection title="Other" items={otherMenuItems} />
        </ul>
      </nav>
    );
  };
  
  export default Menus;
  