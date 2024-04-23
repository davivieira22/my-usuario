import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import Home from './Conteiner/home'
import GlobalStyle from './style/GlobalStyle';
import  User from './Conteiner/users'
ReactDOM.render(<>

    < Routes/> <GlobalStyle></GlobalStyle>

</>
    , document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />,<GlobalStyle></GlobalStyle>);
