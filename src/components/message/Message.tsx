import React from "react";
import styles from "./Message.module.css";

const Message = () => {
    return (
        <div className={`${styles.messageContainer} ${styles.isMineMess}`}>
            <div className={styles.menuFrom}>
                <div className={styles.message}>
                    <div className={`${styles.messageData} ${styles.isMineData}`}>
                        <span>Hello hello </span>
                        <div className={styles.messageInfo}>
                            <span>12:15</span>
                        </div>
                    </div>
                </div>

                <div className={styles.menuFrom}></div>
            </div>
        </div>
    );
};

export default Message;
