const Background = () => {
  return (
    <div className="background-container">
      <div className="glow-container">
        <div className="ball"></div>
        <div
          className="ball"
          style={{
            animationDelay: "-12s",
            width: "35%",
            animationDuration: "20s",
          }}
        ></div>
        <div
          className="ball"
          style={{
            animationDelay: "-10s",
            width: "30%",
            animationDuration: "30s",
          }}
        ></div>
        <div
          className="ball"
          style={{
            animationDelay: "-14s",
            width: "40%",
            animationDuration: "25s",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Background;
