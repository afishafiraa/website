import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const items = [
    {
        color   :'merah',
        img     : 'apple.jpg',
        title   :'Apel',
    },
    {
        color   :'kuning',
        img     :'nanas.jpg',
        title   :'Nanas',
    },
    {
        color   :'hijau',
        img     :'alpukat.jpg',
        title   :'Alpukat',
    },
    {
        color   :'biru',
        img     :'berry.jpg',
        title   :'Blueberry',
    },
    {
        color   : 'grey',
        img     : null,
        title   : 'Calculator'
    }
];

ReactDOM.render(<App items={items} />, 
    document.getElementById('root'));

serviceWorker.register();