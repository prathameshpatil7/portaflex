import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setApp } from "@/action/app";
import LoginPage from "@/pages/Login";

const Container = (props) => {
  return <LoginPage {...props} />;
};

const mapStateToProps = ({ app }) => ({
  ...app,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onSetApp: setApp,
    },
    dispatch
  );
// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(Container);
