import React from "react";
import style from "./NavPage.module.css";

const NavPage = () => {
    console.log("lll");
    return (
        <div className={style.navigation}>
            <a href="/lol" className={style.navItem}>
                <span>Chats</span>
            </a>
            <a href="/lol" className={style.navItem}>
                <span>My Account</span>
            </a>
            <a href="/lol" className={style.navItem}>
                <span>Settings</span>
            </a>
        </div>
    );
};

export default NavPage;
