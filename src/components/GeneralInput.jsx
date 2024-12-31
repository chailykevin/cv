/* eslint-disable react/prop-types */
import "../style/GeneralInput.css";

function Input(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <input type="text" placeholder={props.placeholder} />
    </>
  );
}

function GeneralInput(props) {
  const inputs = [
    { name: "Full Name", placeholder: "Ex. Johny Poly" },
    { name: "Job to apply", placeholder: "Ex. Accounting Manager" },
    { name: "Phone Number", placeholder: "Ex. +62 8261628311" },
    { name: "Email", placeholder: "Ex. john@example.com" },
    { name: "Address", placeholder: "Ex. Sesame Street" },
    { name: "About", placeholder: "Ex. Lorem" },
  ];

  return (
    <div id="general" className="all">
      <form onSubmit={props.saveInputs}>
        <h1>General Information</h1>
        {inputs.map((input, index) => (
          <Input
            key={index}
            name={input.name}
            placeholder={input.placeholder}
          />
        ))}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default GeneralInput;
