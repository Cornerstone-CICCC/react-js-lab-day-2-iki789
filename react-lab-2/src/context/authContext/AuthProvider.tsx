import React, { useState } from "react";
import { AuthContext } from "./authContext";

const AuthProvider = (props: React.PropsWithChildren) => {
  const [name, setName] = useState<string>("");
  return (
    <AuthContext.Provider value={{ name: name, setName }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
