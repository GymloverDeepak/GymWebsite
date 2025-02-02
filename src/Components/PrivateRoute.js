import React from "react";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
  const uuid = localStorage.getItem("uuid");
  return uuid?.length > 0 ? (
    <>
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
