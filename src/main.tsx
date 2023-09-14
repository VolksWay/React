import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

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
import CardOfertasPneu from './components/CardOfertasPneu'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from './components/Banner'
import Header from './components/Header'


//import swiper





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/cadastro/adm_frota' element={<CadastroAdmFrota />} />

        <Route path='/cadastro/empresa' element={<CadastroEmpresa />} />
        <Route path='/cadastro/geral' element={<CadastroGeral />} />
        <Route path='/cadastro/ofertas' element={<CadastroOfertas />} />
        <Route path='/cadastro/usuario' element={<CadastroTipoUsuario />} />
        <Route path='/cadastro/veiculo' element={<CadastroVeiculo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/privacidade' element={<Privacidade />} /> */}
        <Route path='/produtos' element={<Produtos />} />
        {/* <Route path='/card-ofertas' element={<CardOfertas />} /> */}
        {/* <Route path='/banner' element={<Banner />} /> */}
    </Routes>
  </BrowserRouter>
  </React.StrictMode >,
)