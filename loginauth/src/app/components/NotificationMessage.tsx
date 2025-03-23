import { useEffect } from "react";
import './NotificationMessage.css';

interface MessageProps {
  message: string | null;
  onClose: () => void;
  color: "success" | "error" | "warning" | "info"; // Restrict to predefined types
}

const NotificationMessage: React.FC<MessageProps> = ({ message, onClose, color }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // Hide after 2s

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null; // Prevent rendering if message is null

  return (
    <div className={`toast toast-${color}`}>
      {message}
    </div>
  );
};

export default NotificationMessage;
