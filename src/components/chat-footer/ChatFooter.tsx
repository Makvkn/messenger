import React, { useState } from "react";
import styles from "./ChatFooter.module.css";
import Icon from "../icon/Icon";

const ChatFooter = () => {
    const [ownMessage, setOwnMessage] = useState("");
    const writeOnInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOwnMessage(e.target.value);
    };
    const checkSubmit = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            console.log(ownMessage);
            setOwnMessage("");
        }
    };

    return (
        <div className={styles.chatFooter}>
            <form action="">
                <div className={styles.fieldWrapper}>
                    <textarea
                        name=""
                        id=""
                        placeholder="Message..."
                        value={ownMessage}
                        onChange={writeOnInput}
                        onKeyDown={checkSubmit}
                    ></textarea>
                    <button className={styles.sendMess}>
                        <Icon icon="custom-send-1" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatFooter;
