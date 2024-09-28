/** @jsxImportSource @emotion/react */

import { Logo } from "@entities/logo";
import { useDDDNavigate } from "@entities/navigate";
import { OutlinedInputWithLabel } from "@shared/CommonUI/input";
import { useForm } from "@shared/hooks/model/useForm";
import { InputBoxWrapper, SigninBoxStyle } from "../model/style";

export const SignupBox = () => {
  const { register, onSubmit } = useForm({
    name: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const navigator = useDDDNavigate();
  return (
    <div css={{ flexDirection: "column", ...SigninBoxStyle }}>
      <Logo size="md" />
      <div css={{ flexDirection: "column", ...InputBoxWrapper }}>
        <OutlinedInputWithLabel title={"이름:"} {...register("name")} />
        <OutlinedInputWithLabel title={"아이디:"} {...register("username")} />
        <OutlinedInputWithLabel title={"비밀번호:"} {...register("password")} />
        <OutlinedInputWithLabel
          title={"비밀번호 확인:"}
          {...register("passwordConfirm")}
        />
        <span onClick={() => navigator.toSignin()}>로그인</span>
        <button onClick={onSubmit((formData) => console.log(formData))}>
          회원가입
        </button>
      </div>
    </div>
  );
};
