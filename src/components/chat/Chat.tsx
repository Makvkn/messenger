import React, { FC } from "react";
import styles from "./Chat.module.css";
import { IUser } from "../../pages/chats/ChatsPage";
import { useNavigate } from "react-router-dom";

interface Props {
    user: IUser;
}

const ChatItem: FC<Props> = (props) => {
    const navigate = useNavigate();
    return (
        <div
            className={styles.chatItem}
            role="presentation"
            onClick={() => navigate(`/chat?id=${props.user.id}`)}
        >
            <div className={styles.Avatar}>{props.user.username[0]}</div>
            <div className={styles.chatData}>
                <div className={styles.nameWrapper}>
                    <span className={styles.textNowrap}>{props.user.username}</span>
                    <div className={styles.lastMessageData}>
                        <span className={styles.lastMessageTime}>1 hour ago</span>
                        <span>&#10003;</span>
                    </div>
                </div>
                <div className={styles.textMessage}>{props.user.lastMessage}</div>
            </div>
        </div>
    );
};

export default ChatItem;
