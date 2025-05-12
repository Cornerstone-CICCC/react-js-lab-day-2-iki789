import React from "react";
import AuthProvider from "./authContext/AuthProvider";

const ContextProviders = (props: React.PropsWithChildren) => {
  return <AuthProvider>{props.children}</AuthProvider>;
};

export default ContextProviders;
