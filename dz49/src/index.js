import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let intro = "Intro";
let ang = "Angel";
let capt = "Captain";
let cor = "Корабли";
let tr = "Try";
let night = "Ночи в одного";
let sam = "Самурай";
let tel = "Говори мне";
let mal = "Malboro";
let bism = "Bismark feat.TimaniYO,KADI";
let sorry = "Sorry";
let kind = "Kingdom";
let we = "Мы не одни";
let year = "Copyright - 2026"
root.render(
  <React.StrictMode>
    <App intro = {intro} ang = {ang} capt ={capt}  cor = {cor} tr = {tr} night={night} sam = {sam} tel = {tel} mal = {mal} bism ={bism} sorry ={sorry} kind={kind} we = {we} year = {year}/>

  </React.StrictMode>
);


