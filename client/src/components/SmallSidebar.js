import { FaRegTimesCircle } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useAppContext } from "../context/appContext";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaRegTimesCircle />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">nav-links</div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
