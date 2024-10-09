import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setApp } from "@/action/app";
import Dashboard from "@/pages/Dashboard";
import { Navigate } from "react-router-dom";

const Container = (props) => {
  const token = sessionStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;
  return <Dashboard {...props} />;
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
