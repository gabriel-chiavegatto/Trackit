// import styled from 'styled-components';
// import { Link, useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Habitos from './main/habitos/Habitos';
import Hoje from './main/hoje/Hoje';
import Historico from './main/Historico';


export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/habitos' element={<Habitos />} />
            <Route path='/hoje' element={<Hoje />} />
            <Route path='/historico' element={<Historico />} />
        </Routes>
        </BrowserRouter>
    )
}