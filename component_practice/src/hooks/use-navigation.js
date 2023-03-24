import { useContext } from "react";
import NavigtionContext from "../context/navigation";

function useNavigation() {
  return useContext(NavigtionContext);
}

export default useNavigation;
