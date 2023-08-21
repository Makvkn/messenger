import ChatPage from './pages/chats/ChatPage';
import styles from './App.module.css';
import NavPage from './pages/navigation/NavPage';

export const App = () => {
    return (
        <div className={styles.App}>
            <ChatPage />
            <NavPage />
        </div>
    );
};
