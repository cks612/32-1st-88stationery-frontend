import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Login.scss";

const Login = () => {
  // state zone
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
  });

  // function zone
  const inputHandler = e => {
    setUserInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(userInfo);
  };

  // const goMain = e => {
  //   e.preventDefault();
  //   navigate("/Main");
  //   alert("로그인 성공");
  // };

  const onSubmit = e => {
    e.preventDefault();

    fetch("http://10.58.5.120:8000/users/signin", {
      method: "POST",
      body: JSON.stringify({
        email: userInfo.id,
        password: userInfo.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log("결과확인: ", result);
        navigate("/Main");
      });
  };

  // variable zone

  const navigate = useNavigate();

  const idisValid = userInfo.id.length === 0;

  const pwisValid = userInfo.pw.length === 0;

  const emailCheck =
    (userInfo.id.includes("@") && userInfo.id.includes(".com")) ||
    userInfo.id.length === 0;

  const emailValid =
    userInfo.id.includes("@") &&
    userInfo.id.includes(".com") &&
    userInfo.id.length > 1;

  const buttonActive = emailValid && !pwisValid;

  return (
    <div className="loginArea">
      <div className="loginContainer">
        <form action="" onSubmit={onSubmit}>
          <h1>로그인</h1>
          <div className="acountContent">
            <ul className="loginForm">
              <li>
                <input
                  className={!emailValid ? "input-disable" : "input-able"}
                  type="text"
                  placeholder="아이디"
                  name="id"
                  onChange={inputHandler}
                />
                {idisValid && <p>ℹ 아이디를 입력해주세요.</p>}
                {!emailCheck && <p>ℹ 아이디는 이메일 형식이어야 합니다.</p>}
                {emailCheck && !idisValid && (
                  <p className="loginInputText">ℹ 아이디 입력완료</p>
                )}
              </li>
              <li>
                <input
                  className={pwisValid ? "input-disable" : "input-able"}
                  type="password"
                  placeholder="비밀번호"
                  name="pw"
                  onChange={inputHandler}
                />
                {pwisValid && <p>ℹ 비밀번호를 입력해주세요</p>}
                {!pwisValid && (
                  <p className="loginInputText">ℹ 비밀번호 입력완료</p>
                )}
              </li>
            </ul>
            <div className="loginCheckBox">
              <input type="checkbox" id="isSaveIdCheck" />
              <label htmlFor="isSaveIdCheck"> 아이디 저장</label>
            </div>
          </div>
          <footer className="buttonGroup">
            <button
              className={!buttonActive ? "btnLogin" : "btnLogin active"}
              disabled={!buttonActive}
              type="submit"
            >
              로그인
            </button>
          </footer>
        </form>
        <ul className="loginNav">
          <li>
            <Link to="/Signup">회원가입</Link>
          </li>
          <li>아이디 찾기</li>
          <li>비밀번호 찾기</li>
        </ul>
      </div>
      <div style={{ color: "red" }}>
        <p>usestate 현황</p>
        <p>아이디 값 : {userInfo.id}</p>
        <p>패스워드 값 : {userInfo.pw}</p>
      </div>
    </div>
  );
};

export default Login;
