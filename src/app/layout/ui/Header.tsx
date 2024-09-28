/** @jsxImportSource @emotion/react */

import { Logo } from "@entities/logo";
import { headerContainerStyle } from "../model/style";
import { useDDDNavigate } from "@entities/navigate";

export const Header = () => {
  const navigator = useDDDNavigate();
  return (
    <div css={{ position: "relative", ...headerContainerStyle }}>
      <Logo size="sm" onClick={() => navigator.toDashboard()} />
    </div>
  );
};
