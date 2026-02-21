function Card({ children }) {
  return (
    <div className="p-4 space-y-5 shadow-xl shadow-neutral-100 bg-white rounded-xl">
      {children}
    </div>
  );
}

export default Card;
