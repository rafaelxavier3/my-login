import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  })
  .required();

export function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="container">
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Registrar</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="nome"
              onChange={(e) => setName(e.target.value)}
            />
            <span>{errors.name?.message}</span>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>{errors.email?.message}</span>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>{errors.password?.message}</span>
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
