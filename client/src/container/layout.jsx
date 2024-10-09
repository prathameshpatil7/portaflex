import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Layout from "@/pages/Layout";
import { setApp } from "@/action/app";
import { useEffect } from "react";
import { fetch } from "@/service/fetch";

const Container = (props) => {
  const { onSetApp } = props;

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) return;
      try {
        const response = await fetch(
          {
            url: `/user/profile`,
          },
          "GET"
        );

        const data = await response.user;
        onSetApp({ userData: data, userId: data.userId });
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dependency array, will run when userId changes
  return <Layout {...props} />;
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
