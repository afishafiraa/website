import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const items = [
    {
        color   :'Merah',
        img     : 'apple.jpg',
        title   :'Apel',
    },
    {
        color   :'Kuning',
        img     :'nanas.jpg',
        title   :'Nanas',
    },
    {
        color   :'Hijau',
        img     :'alpukat.jpg',
        title   :'Alpukat',
    },
    {
        color   :'Biru',
        img     :'berry.jpg',
        title   :'Blueberry',
    },
];

ReactDOM.render(<App items={items} />, 
    document.getElementById('root'));

