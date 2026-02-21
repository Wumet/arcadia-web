function Card({ children }) {
  return (
    <div className="max-sm:w-40 p-4 md:p-6 space-y-5 shadow-xl shadow-neutral-100 bg-white rounded-xl">
      {children}
    </div>
  );
}

export default Card;
