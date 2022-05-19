function Inputs() {
  return (
    <div className={"inputContainer"}>
        <div className="inputFirstLastName">
        <input type={"text"} placeholder="First Name" className={"inputName"} />
        <input
          type="text"
          placeholder="Last Name"
          className={"inputLastName"}
        />
      </div>
      <div className={"inputEmailPhone"}>
        <input type={"email"} placeholder={"E-mail"} className={"email"} />
        <input type={"number"} placeholder={"phone"} className={"phone"} />
      </div>
      <div className={"textareaContainer"}>
        <textarea placeholder={"massage"} className={"textarea"}></textarea>
      </div>
      <div className={"checkboxAndBtnContainer"}>
        <p className={"inputText"}>
          <input type="checkbox" className={"checkbox"} />
          subscribe to newsletter
        </p>
        <button className={"btnSend"}>SEND</button>
      </div>
    </div>
  );
}
export default Inputs;
