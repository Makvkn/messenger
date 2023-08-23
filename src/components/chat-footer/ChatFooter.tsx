import React from "react";
import styles from "./ChatFooter.module.css";
import Icon from "../icon/Icon";

const ChatFooter = () => {
    return (
        <div className={styles.chatFooter}>
            <form action="">
                <div className={styles.fieldWrapper}>
                    <textarea name="" id="" placeholder="Message..."></textarea>
                    <button className={styles.sendMess}>
                        <Icon icon="custom-send-1" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatFooter;
