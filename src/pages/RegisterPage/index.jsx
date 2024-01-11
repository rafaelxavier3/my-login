import { useState } from "react";
import { Link } from "react-router-dom";

export function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="content">
        <form>
          <h1>Registrar</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="nome"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Cadastrar</button>
          <div className="register-link">
            <p>Já possui uma conta?</p>
            <Link to="/">Entrar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
