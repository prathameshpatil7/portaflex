import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setApp } from "@/action/app";
import Template1 from "@/pages/Template1";

const Container = (props) => {
  return <Template1 {...props} />;
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
