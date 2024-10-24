import { Flex, Spin } from "antd";
import React from "react";

const LoadingPage = () => {
  return <Spin fullscreen={true} tip="Loading" size="large"></Spin>;
};

export default LoadingPage;
