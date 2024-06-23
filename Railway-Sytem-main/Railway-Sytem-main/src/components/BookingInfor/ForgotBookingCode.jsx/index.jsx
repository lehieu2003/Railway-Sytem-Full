const ForgotBookingCode = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        position: "relative",
        zIndex: 1,
        top: "80px",
        padding: "20px",
        border: "1px solid black",
        margin: "0 auto",
        flexDirection: "column",
        borderTop: "none",
      }}
    >
      <div>
        <div className="flex flex-row gap-0">
          <h2 className="text-white font-bold bg-customBlue rounded-tr-none rounded-br-none rounded">
            GET BOOKING CODE BACK
          </h2>
          <img
            src="label_bg.png"
            alt="Description of image"
            className="rounded-tl-none rounded-bl-none rounded"
          />
        </div>
      </div>
      <span className="text-customBlue font-normal my-3">
        Text VTBC syntax to 8200 or enter email to retrieve the Reservation
        Code.{" "}
      </span>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginLeft: "100px",
        }}
      >
        <div>
          <span
            style={{
              color: "#555555",
              fontWeight: "bold",
            }}
          >
            Email{" "}
          </span>
        </div>

        <div>
          <input
            type="email"
            style={{
              border: "2px solid #cccccc",
              borderRadius: "5px",
              padding: "4px",
              width: "50%",
            }}
          />
          <button
            style={{
              backgroundColor: "#0082c4",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              border: "none",
              marginLeft: "13px",
            }}
          >
            Get code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotBookingCode;
