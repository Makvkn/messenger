import ChatsPage from "./pages/chats/ChatsPage";
import styles from "./App.module.css";
import NavPage from "./pages/navigation/NavPage";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./pages/chat/ChatPage";

export const App = () => {
    return (
        <div className={styles.App}>
            <Routes>
                <Route path="/" element={<ChatsPage />} />
                <Route path="/nav" element={<NavPage />} />
                <Route path="/chat" element={<ChatPage />} />
            </Routes>
        </div>
    );
};
