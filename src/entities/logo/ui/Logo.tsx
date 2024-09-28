/** @jsxImportSource @emotion/react */
import LogoImage from "@shared/assets/images/ddd_logo.png";
import { logoImageSize, logoStyle } from "../model/style";

export const Logo = ({
  size = "md",
  onClick,
}: {
  size?: "sm" | "md" | "lg";
  onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) => {
  const returnSize = (size: string) => {
    switch (size) {
      case "sm":
        return logoImageSize.sm;
      case "md":
        return logoImageSize.md;
      case "lg":
        return logoImageSize.lg;
      default:
        return logoImageSize.md;
    }
  };

  const imageSize = returnSize(size);
  return (
    <div css={imageSize} onClick={(e) => onClick?.(e)}>
      <img src={LogoImage} alt="DDD logo" css={logoStyle} draggable={false} />
    </div>
  );
};
