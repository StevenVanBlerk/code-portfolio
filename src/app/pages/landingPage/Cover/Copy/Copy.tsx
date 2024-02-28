const Button = ({ children }) => {
  return (
    <button
      style={{
        fontSize: "26px",
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </button>
  );
};

const Copy = () => {
  return (
    <div>
      <div
        style={{
          fontFamily: "Minimalist",
          textAlign: "right",
          height: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            overflowWrap: "break-word",
          }}
        >
          <span>Steven van Blerk</span>
        </h1>
        <h2
          style={{
            fontSize: "36px",
            marginTop: "-30px",
            marginBottom: "24px",
          }}
        >
          Frontend engineer
        </h2>
        <Button>Github</Button>
        <Button>Storybook</Button>
        <Button> Creative coding</Button>
        <Button>About me</Button>
        <Button>Download CV</Button>
      </div>
    </div>
  );
};

export default Copy;
