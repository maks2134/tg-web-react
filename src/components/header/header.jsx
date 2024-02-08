import React from 'react';
import Button from "../button/button";
const tg = window.Telegram.WebApp;
import "../header/header.css"
const Header = () => {

    const oneClose = ()=>{
        tg.close();
    }


    return (
        <div className={'header'}>
            <Button onClick={oneClose}>Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;