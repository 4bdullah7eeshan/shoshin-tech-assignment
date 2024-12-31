import MenuItem from "../MenuItem/MenuItem";

const MenuSection = ({ title, items }) => {
    return (
        <li>
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <MenuItem key={index} icon={item.icon} text={item.text} />
                ))}
            </ul>
        </li>
    );
};

export default MenuSection;
