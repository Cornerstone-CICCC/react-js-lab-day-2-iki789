import React from "react";

type authContext = {
  name: string;
  setName: (name: string) => void;
};

export const AuthContext = React.createContext<authContext>({
  name: "",
  setName: () => {},
});
