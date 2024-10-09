import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RegisterPage from "@/pages/Register";
import { setApp } from "@/action/app";

const Container = (props) => {
  return <RegisterPage {...props} />;
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
export default connect(mapStateToProps, mapDispatchToProps)(Container);
