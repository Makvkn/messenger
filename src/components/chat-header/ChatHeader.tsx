import React from "react";
import styles from "./ChatHeader.module.css";
import Icon from "../icon/Icon";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.chatHeader}>
            <button className={styles.backToChats} onClick={() => navigate("/")}>
                <Icon icon="arrow-64" />
            </button>
            <div className={styles.nameChat}>
                <div className={styles.avatar}>M</div>
                <div className={styles.nameChatData}>
                    <span>Hello Kitty</span>
                    <span>Online</span>
                </div>
            </div>
            <div className={styles.menuFrom}>
                <div>
                    <button>
                        <Icon icon="menu-dot-vertical-filled" />
                    </button>
                </div>
            </div>
            <div className={styles.menu}>
                <div className={styles.menuItem}>Chat Profile</div>
            </div>
        </div>
    );
};

export default ChatHeader;
