import React from 'react'
import ReactDOM from 'react-dom/client'
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 
 
   
    <CadastroAdmFrota />
    <CadastroEmpresa />
    <CadastroGeral />
    <CadastroOfertas />
    <CadastroTipoUsuario />
    <CadastroVeiculo />
    <Login />
    <Privacidade />
    <Produtos />
  </React.StrictMode>,
)
