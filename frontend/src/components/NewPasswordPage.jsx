import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextBox from "./TextBox";
import "./NewPasswordPage.css";

const NewPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleChangeClick = async () => {
    // 비밀번호 유효성 검사
    if (password.length < 8) {
      setError("비밀번호는 8자 이상이어야 합니다.");
      return;
    }

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`/api/user/change_password/${token}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to reset password");
      }

      alert("비밀번호가 성공적으로 재설정되었습니다.");
      navigate("/login");
    } catch (err) {
      setError("비밀번호 재설정에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const isSubmitDisabled = () => {
    return loading || !password || !confirmPassword || password.length < 8;
  };

  return (
    <div className="new-password-container">
      <h1>비밀번호 재설정</h1>
      <div className="input-wrapper">
        <div className="password-field">
          <TextBox
            label="새로운 비밀번호"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            placeholder="8자 이상 입력해주세요"
            required
          />
          <span className="password-hint">
            비밀번호는 8자 이상이어야 합니다
          </span>
        </div>
        <div className="password-field">
          <TextBox
            label="새로운 비밀번호 확인"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError("");
            }}
            placeholder="비밀번호를 다시 입력해주세요"
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button
          onClick={handleChangeClick}
          className="submit-btn"
          disabled={isSubmitDisabled()}
        >
          {loading ? "처리중..." : "재설정하기"}
        </button>
        <div className="button-container">
          <button onClick={handleLoginClick}>로그인으로 돌아가기</button>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordPage;
