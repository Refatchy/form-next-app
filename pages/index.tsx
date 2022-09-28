import { useState } from "react";
import FormInput from "./components/FormInput";

const Home = () => {
  // const usernameRef = useRef();

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  //   console.log(Object.fromEntries(data.entries()));
  // };

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character !",
      label: "username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}",
    },

    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "It should be valid email address!",
      label: "email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "birthday",
      label: "birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      patterm: "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$",
      errorMessage:
        "password should be 10 characters and at least one letter one number and one special character",
      placeholder: "password",
      label: "password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "password dont match",
      label: "Confirm Password",
      required: true,
      pattern: values.password,
    },
  ];
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  console.log("rerendered");
  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  return (
    <div className="container mx-auto mt-20">
      <form
        className="grid grid-cols-2 gap-8"
        onSubmit={handleSubmit}
        action=""
      >
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <div className="col-span-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </div>
      </form>

      <div>
        {values.username}
        {values.birthday}
      </div>
    </div>
  );
};

export default Home;
