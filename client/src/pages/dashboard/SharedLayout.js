import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-student">add student</Link>
        <Link to="all-students">all students</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
export default SharedLayout;
