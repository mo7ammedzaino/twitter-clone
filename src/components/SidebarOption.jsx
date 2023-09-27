import "../Css/sidebarOption.css";

const SidebarOption = ({ active, text, Icon }) => {
  const getClasses = () => {
    return `sidebarOption ${active ? "sidebarOption--active" : ""}`;
  };
  return (
    <div className={getClasses()}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
