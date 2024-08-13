import { useState } from "react";
import Input from "./Input/Input";

const today = new Date().toISOString().split("T")[0];
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    hobbies: [],
    gender: "",
    nationality: "Indian",
    otherNationality: "",
  });

  const [errors, setErrors] = useState({});
  const [showOtherNationality, setShowOtherNationality] = useState(false);
  const [maxDate, setMaxDate] = useState(today);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        hobbies: checked
          ? [...prevData.hobbies, name]
          : prevData.hobbies.filter((hobby) => hobby !== name),
      }));
    } else if (name === "nationality") {
      setShowOtherNationality(value === "Other");
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        otherNationality: value === "Other" ? prevData.otherNationality : "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.name) newErrors.name = "Name is required";
    else if (!nameRegex.test(formData.name))
      newErrors.name = "Name should not contain numbers or special characters";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";
    else if (!passwordRegex.test(formData.password))
      newErrors.password =
        "Password must have at least 8 characters, including 1 lowercase, 1 uppercase, 1 number, and 1 special character";

    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    else if (new Date(formData.dob) > new Date())
      newErrors.dob = "Date of Birth cannot be a future date";

    if (!formData.gender) newErrors.gender = "Gender is required";

    if (formData.hobbies.length === 0)
      newErrors.hobbies = "Atleast select one hobby";

    if (formData.nationality === "Other" && !formData.otherNationality)
      newErrors.otherNationality = "Please specify your nationality";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("User created successfully");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      dob: "",
      hobbies: [],
      gender: "",
      nationality: "Indian",
      otherNationality: "",
    });
    setErrors({});
    setShowOtherNationality(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-lg">
      <div className="md:flex">
        <div className="w-full p-4">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <Input
              id="name"
              label="Name:"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.value}
              errors={errors}
            ></Input>

            <Input
              id="email"
              label="Email:"
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.value}
              errors={errors}
            ></Input>

            <Input
              id="password"
              label="Password:"
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.value}
              errors={errors}
            ></Input>

            <Input
              id="dob"
              label="D.O.B:"
              type="date"
              name="dob"
              max={maxDate}
              onChange={handleChange}
              value={formData.value}
              errors={errors}
            ></Input>

            <div className="mb-4">
              <span className="block text-sm font-medium text-gray-700">
                Hobbies:
              </span>
              <div className="mt-1">
                {["Reading", "Traveling", "Cooking", "Sports"].map((hobby) => (
                  <div className="flex items-center" key={hobby}>
                    <input
                      type="checkbox"
                      id={hobby.toLowerCase()}
                      name={hobby}
                      className="mr-2"
                      onChange={handleChange}
                    />
                    <label htmlFor={hobby.toLowerCase()} className="text-sm">
                      {hobby}
                    </label>
                  </div>
                ))}
              </div>
              {errors.hobbies && (
                <p className="text-red-500 text-xs mt-1">{errors.hobbies}</p>
              )}
            </div>
            <div className="mb-4">
              <span className="block text-sm font-medium text-gray-700">
                Gender:
              </span>
              <div className="mt-1">
                {["Male", "Female"].map((gender) => (
                  <div className="flex items-center" key={gender}>
                    <input
                      type="radio"
                      name="gender"
                      id={gender.toLowerCase()}
                      value={gender}
                      className="mr-2"
                      onChange={handleChange}
                    />
                    <label htmlFor={gender.toLowerCase()} className="text-sm">
                      {gender}
                    </label>
                  </div>
                ))}
              </div>
              {errors.gender && (
                <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="nationality"
                className="block text-sm font-medium text-gray-700"
              >
                Nationality:
              </label>
              <select
                id="nationality"
                name="nationality"
                className="mt-1 block w-full border-b border-purple-600 focus:outline-none px-2"
                value={formData.nationality}
                onChange={handleChange}
              >
                <option value="Indian">Indian</option>
                <option value="Other">Other</option>
              </select>
              {showOtherNationality && (
                <div className="mt-4">
                  <label
                    htmlFor="otherNationality"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Please specify:
                  </label>
                  <input
                    className="mt-1 block w-full border-b border-purple-600 focus:outline-none px-2"
                    type="text"
                    id="otherNationality"
                    name="otherNationality"
                    value={formData.otherNationality}
                    onChange={handleChange}
                  />
                  {errors.otherNationality && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.otherNationality}
                    </p>
                  )}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
              onClick={handleReset}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
