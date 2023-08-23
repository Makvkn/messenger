import React from "react";
import styles from "./ChatPage.module.css";
import ChatHeader from "../../components/chat-header/ChatHeader";
import MessagesHistory from "../../components/messages-history/messagesHistory";
import ChatFooter from "../../components/chat-footer/ChatFooter";

const ChatPage = () => {
    return (
        <div className={styles.chatPage}>
            <ChatHeader />
            <MessagesHistory />
            <ChatFooter />
        </div>
    );
};

export default ChatPage;
