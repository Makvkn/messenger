import React from "react";
import styles from "./ChatHeader.module.css";

const ChatHeader = () => {
    return (
        <div className={styles.chatHeader}>
            <div className={styles.backToChats}>
                <img src="" alt="Exit" />
            </div>
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
                        <img src="" alt="profile" />
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
