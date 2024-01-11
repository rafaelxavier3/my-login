import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import "./loginpage.css";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <div className="container">
      <div className="content">
        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FaUser size={17} />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <RiLockPasswordFill size={17} />
          </div>
          <div className="remember">
            <label>
              <input type="checkbox" />
              Lembrar-me
            </label>
            <a href="#">Esqueceu sua senha?</a>
          </div>
          <button type="submit">Entrar</button>
          <div className="register-link">
            <p>Não tem uma conta?</p>
            <Link to="/register">Criar conta</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
