import "../Css/sidebar.css";
import { BsTwitter, BsBookmark, BsCardList } from "react-icons/bs";
import { AiFillHome, AiOutlineSearch, AiOutlineMail } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <BsTwitter className="sidebar__twitterIcon" />
      <SidebarOption active Icon={AiFillHome} text="Home" />
      <SidebarOption Icon={AiOutlineSearch} text="Explore" />
      <SidebarOption Icon={IoIosNotificationsOutline} text="Notifications" />
      <SidebarOption Icon={AiOutlineMail} text="Messages" />
      <SidebarOption Icon={BsBookmark} text="Bookmarks" />
      <SidebarOption Icon={BsCardList} text="Lists" />
      <SidebarOption Icon={CgProfile} text="Profile" />
      <SidebarOption Icon={FiMoreHorizontal} text="More" />
      <button>Tweet</button>
    </div>
  );
};

export default Sidebar;
