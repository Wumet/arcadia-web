function Modal({ isOpen, title, subtitle, children }) {
  if (isOpen) {
    return (
      <div className="absolute">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="">{children}</div>
      </div>
    );
  }
  return null;
}

export default Modal;
