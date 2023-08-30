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
import BotaoVerMais from './components/BotaoVerMais/index.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<<<<<<< HEAD
    {/*<Home />
     <CadastroAdmFrota />
    <CadastroVeiculo />
    <CadastroEmpresa />
    <CadastroGeral />
    <CadastroOfertas />*/}
    <CadastroTipoUsuario />
    {/* <Login />
    <Privacidade />
    <Produtos /> */}
  </React.StrictMode>,
=======
    <BrowserRouter>
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='#' element={<Produtos />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
    </Routes>
  </BrowserRouter>
  </React.StrictMode >,
>>>>>>> 08c9f3fe2bd50a5b7b94159995b3e9cd49c3ef20
)
