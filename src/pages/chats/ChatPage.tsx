import React from 'react';
import Chat from '../../components/chat/Chat';
import styles from './ChatPage.module.css';

const ChatPage = () => {
    return (
        <div className={styles.chatPage}>
            <h1>Chats</h1>
            <div className={styles.inputSearchContainer}>
                <input type="text" placeholder="Search..." className={styles.inputSearch} />
            </div>
            <div className={styles.chatList}>
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </div>
        </div>
    );
};

export default ChatPage;
