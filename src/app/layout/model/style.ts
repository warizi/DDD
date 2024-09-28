import { background } from "@shared/theme";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "./consts";

//header
export const headerContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: `${HEADER_HEIGHT}px`,
  padding: "0 15px",
  background: background.base,
  boxShadow: "0 0px 10px rgba(0, 0, 0, 0.1)",
  zIndex: 5000,
};

//mainFrame
export const mainFrameStyle = {
  width: "100%",
  height: "100vh",
  background: background.deep,
};

export const mainStyle = {
  padding: "10px",
  marginLeft: `${SIDEBAR_WIDTH}px`,

  "@media (max-width: 768px)": {
    marginLeft: 0,
  },
};

//sidebar
export const sidebarStyle = {
  top: `${HEADER_HEIGHT}px`,
  width: `${SIDEBAR_WIDTH}px`,
  height: `calc(100vh - ${HEADER_HEIGHT}px)`,
  padding: "10px",
  background: background.base,
  boxShadow: "0px 0 10px rgba(0, 0, 0, 0.1)",
  zIndex: 3000,
  "@media (max-width: 768px)": {
    top: 0,
    right: 0,
    height: "100vh",
    shadow: "0 0px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 5001,
  },
};
