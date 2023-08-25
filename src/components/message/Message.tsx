import React from "react";
import styles from "./Message.module.css";

interface Props {
    messText: string;
}

const Message = (props: Props) => {
    return (
        <div className={`${styles.messageContainer} ${styles.isMineMess}`}>
            <div className={styles.menuFrom}>
                <div className={styles.message}>
                    <div className={`${styles.messageData} ${styles.isMineData}`}>
                        <span>{props.messText}</span>
                        <div className={styles.messageInfo}>
                            <span>04:20</span>
                        </div>
                    </div>
                </div>
                <div className={styles.menuFrom}></div>
            </div>
        </div>
    );
};

export default Message;
