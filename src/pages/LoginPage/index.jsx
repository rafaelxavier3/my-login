import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import "./loginpage.css";

export function LoginPage() {
  return (
    <div className="container">
      <div className="content">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="nome" />
            <FaUser size={17} />
          </div>
          <div className="input-box">
            <input type="password" placeholder="senha" />
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
