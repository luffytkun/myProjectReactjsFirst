import Footer from "../components/Footer/Footer";
import Header from "../../layouts/components/Header";
import PropTypes from "prop-types";

// import Sidebar from "../../layouts/components/Sidebar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        {/* <Sidebar /> */}
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
