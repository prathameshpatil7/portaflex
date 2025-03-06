import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { fetch } from "@/service/fetch";
import PortfolioLayout from "@/pages/PortfolioLayout";
import { useParams } from "react-router-dom";

const Container = (props) => {
  const { routeName } = useParams();
  const [portfolioData, setPortfolioData] = useState([]);
  const [notFound, setNotFound] = useState(false); // New state for handling 404

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!routeName) return;
      try {
        const response = await fetch(
          {
            url: `/user/${routeName}/portfolio`,
          },
          "GET"
        );

        const data = response || [];
        setPortfolioData(data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setNotFound(true); // Set notFound to true if 404 error
        }
      }
    };

    fetchUserProfile();
  }, [routeName]); // Dependency array, will run when routeName changes
  return (
    <PortfolioLayout
      {...props}
      portfolioData={portfolioData}
      notFound={notFound}
    />
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(Container);
