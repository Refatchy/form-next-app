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
      label: "username",
    },

    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      label: "email",
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
      type: "password",
      placeholder: "password",
      label: "password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
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
        onSubmit={handleSubmit}
        action=""
        className="grid grid-cols-2 gap-8"
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
