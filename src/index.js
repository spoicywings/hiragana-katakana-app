import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HiraganaPage from './HiraganaPage';
import KatakanaPage from './KatakanaPage';
import HomePage from './HomePage';
import NavBar from './NavBar';
import {HashRouter, Routes, Route} from 'react-router-dom';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <NavBar/>
    <HashRouter>
      <Routes>
        <Route path="/hiragana-katakana-app" element={<HomePage/>}/>
        <Route path="/hiragana-katakana-app/hiragana" element={<HiraganaPage/>}/>
        <Route path="/hiragana-katakana-app/katakana" element={<KatakanaPage/>}/>
      </Routes>
    </HashRouter>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
