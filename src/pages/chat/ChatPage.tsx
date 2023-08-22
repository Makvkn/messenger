import React from "react";
import styles from "./ChatPage.module.css";
import ChatHeader from "../../components/chat-header/ChatHeader";

const ChatPage = () => {
    return (
        <div className={styles.chatPage}>
            <ChatHeader />
            <div className={styles.messagesHistory}></div>
            <div className={styles.chatFooter}></div>
        </div>
    );
};

export default ChatPage;
