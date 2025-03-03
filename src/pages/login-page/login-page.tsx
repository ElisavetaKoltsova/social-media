import { useState } from "react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
      <div className="auth-container">
          <div className="auth-card">
              <h2>{isLogin ? "Вход" : "Регистрация"}</h2>
              {!isLogin && <input className="login-input" type="text" placeholder="Имя" required />}
              <input className="login-input" type="email" placeholder="Email" required />
              <input className="login-input" type="password" placeholder="Пароль" required />
              <button className="btn btn-primary">{isLogin ? "Войти" : "Зарегистрироваться"}</button>
              <p className="toggle" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? "Нет аккаунта? Зарегистрироваться" : "Уже есть аккаунт? Войти"}
              </p>
          </div>
      </div>
  );
}