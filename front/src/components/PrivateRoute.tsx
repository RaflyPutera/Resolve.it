import { Navigate} from "react-router-dom";
import React from 'react';

const PrivateRoute = (prop:{element:React.ReactElement, auth:any, fallbackPath:string }) => {
    return prop.auth ? prop.element : <Navigate to={prop.fallbackPath} replace={true} state={{ from: prop.fallbackPath }} />
}
export default PrivateRoute;