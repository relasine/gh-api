import React from "react";
import loading from "../../../assets/images/loading.gif";
import "./Loading.scss";
const Loading = () => {
  return <img src={loading} className="gh-loading" alt="loading" />;
};

export default Loading;
