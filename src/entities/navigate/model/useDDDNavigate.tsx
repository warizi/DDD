import { ROUTE_URL } from "@shared/consts/route/url";
import { useNavigate } from "react-router-dom";

export const useDDDNavigate = () => {
  const navigate = useNavigate();

  const urlKeys = Object.keys(ROUTE_URL) as (keyof typeof ROUTE_URL)[];

  const navigator = {} as Record<string, (restPath?: string) => void>;

  //Generate navigator functions
  urlKeys.forEach((key) => {
    // dashboard -> toDashboard
    const keyStr = key as string;
    const keyArr = keyStr.split("");
    keyArr[0] = keyArr[0].toUpperCase();
    const keyCapitalized = keyArr.join("");
    const navigateKey = `to${keyCapitalized}` as keyof typeof navigator;

    navigator[navigateKey] = (restPath?: string) =>
      navigate(ROUTE_URL[key] + (restPath ? `${restPath}` : ""));
  });

  return navigator;
};
