const Card = ({ children }) => (
  <div
    //    className="text-center place-self-center text-white"
    style={{
      marginLeft: "16px",
      marginRight: "16px",
      borderBottom: "1px solid white",
    }}
  >
    {children}
  </div>
);

export default Card;
