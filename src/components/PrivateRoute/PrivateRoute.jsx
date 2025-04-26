import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
  
    if (loading) {
      return (
        <div className="flex justify-center items-center">
          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </div>
      );
    }
  
    if (user && user?.email) {
      return children;
    }
    return <Navigate state={location.pathname} to={`/login`} />;
}

export default PrivateRoute