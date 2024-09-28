/** @jsxImportSource @emotion/react */

import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { mainFrameStyle, mainStyle } from "../model/style";
import { SideBar } from "./SideBar";

export const MainLayout = () => {
  return (
    <div css={mainFrameStyle}>
      <Header />
      <SideBar />
      <main css={mainStyle}>
        <Outlet />
      </main>
    </div>
  );
};
