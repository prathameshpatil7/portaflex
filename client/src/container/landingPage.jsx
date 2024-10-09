import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LandingPage from "@/pages/LandingPage";

const Container = (props) => {
  return <LandingPage {...props} />;
};

const mapStateToProps = ({ app: isDarkMode }) => ({
  isDarkMode,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(Container);
