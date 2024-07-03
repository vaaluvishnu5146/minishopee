import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Two() {
  const appContextData = useContext(AppContext);
  return <h1>{appContextData.c2}</h1>;
}
