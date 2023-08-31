import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
// import Home from './pages/Home/index.tsx'
// import CadastroAdmFrota from './pages/CadastroAdmFrota/index.tsx'
// import CadastroEmpresa from './pages/CadastroEmpresa/index.tsx'
// import CadastroGeral from './pages/CadastroGeral/index.tsx'
// import CadastroOfertas from './pages/CadastroOfertas/index.tsx'
// import CadastroTipoUsuario from './pages/CadastroTipoUsuario/index.tsx'
// import CadastroVeiculo from './pages/CadastroVeiculo/index.tsx'
// import Login from './pages/Login/index.tsx'
// import Privacidade from './pages/Privacidade/index.tsx'
// import Produtos from './pages/Produtos/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Home />
    <CadastroAdmFrota />
    <CadastroEmpresa />
    <CadastroGeral />
    <CadastroOfertas />
    <CadastroTipoUsuario />
    <CadastroVeiculo />
    <Login />
    <Privacidade />
    <Produtos /> */}
  </React.StrictMode>,
)



=======
import Home from './pages/Home/index'
import CadastroAdmFrota from './pages/CadastroAdmFrota/index'
import CadastroEmpresa from './pages/CadastroEmpresa/index'
import CadastroGeral from './pages/CadastroGeral/index'
import CadastroOfertas from './pages/CadastroOfertas/index'
import CadastroTipoUsuario from './pages/CadastroTipoUsuario/index'
import CadastroVeiculo from './pages/CadastroVeiculo/index'
import Login from './pages/Login/index'
import Privacidade from './pages/Privacidade/index'
import Produtos from './pages/Produtos/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro/adm_frota' element={<CadastroAdmFrota />} />
        <Route path='/cadastro/empresa' element={<CadastroEmpresa />} />
        <Route path='/cadastro/geral' element={<CadastroGeral />} />
        <Route path='/cadastro/ofertas' element={<CadastroOfertas />} />
        <Route path='/cadastro/usuario' element={<CadastroTipoUsuario />} />
        <Route path='/cadastro/veiculo' element={<CadastroVeiculo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/privacidade' element={<Privacidade />} />
        <Route path='/produtos' element={<Produtos />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode >,
)
>>>>>>> origin/produtos
