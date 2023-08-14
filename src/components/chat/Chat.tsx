import React from 'react';
import styles from './Chat.module.css';

const Chat = () => {
    return (
        <div className={styles.chatItem}>
            <div className={styles.Avatar}>J</div>
            <div className={styles.chatData}>
                <div className={styles.nameWrapper}>
                    <span className={styles.textNowrap}>Marry Jane</span>
                    <div className={styles.lastMessageData}>
                        <span className={styles.lastMessageTime}>1 hour ago</span>
                        <span>&#10003;</span>
                    </div>
                </div>
                <div className={styles.textMessage}>Hello, my Nigga</div>
            </div>
        </div>
    );
};

export default Chat;
