import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <h1>New Things Will Always Update Regularly</h1>
      <div
        class="input-group mb-3"
        style={{
          width: "50%",
          margin: "0 auto",
          marginTop: "50px",
          border: "none",
          borderRadius: "10px",
        }}
      >
        <span
          class="input-group-text rounded-start"
          id="basic-addon1"
          style={{ backgroundColor: "white" }}
        >
          <i class="bx bx-envelope"></i>
        </span>
        <input
          style={{ height: "80px", border: "none", outline: "none" }}
          type="text"
          class="form-control rounded-end"
          placeholder="Enter your email here"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <button
          type="button"
          class="btn btn-primary btn-lg"
          style={{
            marginLeft: "-170px",
            height: "60px",
            marginTop: "10px",
            borderRadius: "10px",
            width: "25%",
            zIndex: "5",
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Contact;
