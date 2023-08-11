import React from 'react';
import Chat from '../../components/chat/Chat';
import styles from './ChatPage.module.css';

const ChatPage = () => {
    return (
        <div className={styles.chatPage}>
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
        </div>
    );
};

export default ChatPage;
