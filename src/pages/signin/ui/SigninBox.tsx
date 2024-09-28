/** @jsxImportSource @emotion/react */

import { Logo } from "@entities/logo";
import { InputBoxWrapper, SigninBoxStyle } from "../model/style";
import { OutlinedInputWithLabel } from "@shared/CommonUI/input";
import { useForm } from "@shared/hooks/model/useForm";
import { useDDDNavigate } from "@entities/navigate";

export const SigninBox = () => {
  const { register, onSubmit } = useForm({
    username: "",
    password: "",
  });
  const navigator = useDDDNavigate();

  return (
    <div css={{ flexDirection: "column", ...SigninBoxStyle }}>
      <Logo size="md" />
      <div css={{ flexDirection: "column", ...InputBoxWrapper }}>
        <OutlinedInputWithLabel title={"아이디:"} {...register("username")} />
        <OutlinedInputWithLabel title={"비밀번호:"} {...register("password")} />
        <span onClick={() => navigator.toSignup()}>회원가입</span>
        <button onClick={onSubmit((formdata) => console.log(formdata))}>
          로그인
        </button>
      </div>
    </div>
  );
};
