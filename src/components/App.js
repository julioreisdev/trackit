import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Login from "./Login/Login";
import Cadastro from "./Cadastro/Cadastro";
import Hoje from "./Hoje/Hoje";
import DadosUser from "./Context/DadosUser";
import { useState } from "react";
import Habitos from "./Habitos/Habitos";
import Historico from "./Historico/Historico";

export default function App() {
  const [imgUser, setImgUser] = useState();
  const [nomeUser, setNomeUser] = useState();
  const [habitos, setHabitos] = useState([]);
  const [token, setToken] = useState();
  const [config, setConfig] = useState({});
  const [nomeHabito, setNomeHabito] = useState("");

  return (
    <BrowserRouter>
      <DadosUser.Provider
        value={{
          imgUser,
          setImgUser,
          nomeUser,
          setNomeUser,
          habitos,
          setHabitos,
          config,
          setConfig,
          token,
          setToken,
          nomeHabito,
          setNomeHabito,
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </DadosUser.Provider>
    </BrowserRouter>
  );
}
