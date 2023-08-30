import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index.tsx'
import CadastroAdmFrota from './pages/CadastroAdmFrota/index.tsx'
import CadastroEmpresa from './pages/CadastroEmpresa/index.tsx'
import CadastroGeral from './pages/CadastroGeral/index.tsx'
import CadastroOfertas from './pages/CadastroOfertas/index.tsx'
import CadastroTipoUsuario from './pages/CadastroTipoUsuario/index.tsx'
import CadastroVeiculo from './pages/CadastroVeiculo/index.tsx'
import Login from './pages/Login/index.tsx'
import Privacidade from './pages/Privacidade/index.tsx'
import Produtos from './pages/Produtos/index.tsx'

//estilização global
/* import "./index.css"; */

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardAvaliacao from './components/CardAvaliacao/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter> {/*Indica que aplicação terá rotas*/}
    {/* <Header /> */}
    <Routes>
    <Route path='/' element={<Home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}

      {/* <CadastroAdmFrota />
      <CadastroEmpresa />
      <CadastroGeral />
      <CadastroOfertas />
      <CadastroTipoUsuario />
      <CadastroVeiculo />
      <Login />
      <Privacidade />
      <Produtos /> */}
    </Routes>
   {/*  <Footer /> */}
   </BrowserRouter>
   </React.StrictMode>

)



