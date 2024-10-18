import React, { useState, useEffect } from "react";

const Notification = ({ message, type, duration, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, duration || 1000); // default duration 3 seconds

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [message, duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`notification ${type}`}>
      {message +" PAYMENT CONFIRMATION PENDING"}
    </div>
  );
};

export default Notification;
