import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setApp } from "@/action/app";
import SetRoute from "@/pages/SetRoute";

const Container = (props) => {
  return <SetRoute {...props} />;
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
