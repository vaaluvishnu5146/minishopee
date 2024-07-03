import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function One() {
  const appContextData = useContext(AppContext);
  return <h1>{appContextData.c1}</h1>;
}
