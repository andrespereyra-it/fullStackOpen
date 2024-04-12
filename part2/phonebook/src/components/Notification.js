const Notification = ({ errorMessage, successMessage }) => {
  if (!errorMessage && !successMessage) {
    return null;
  }

  return (
    <div>
      {errorMessage && (
        <div className="message message--error">{errorMessage}</div>
      )}
      {successMessage && (
        <div className="message message--success">{successMessage}</div>
      )}
    </div>
  );
};

export default Notification;
