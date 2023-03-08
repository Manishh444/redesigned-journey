import React from 'react';
import ReactDom from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';


const AppLayout = ()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)