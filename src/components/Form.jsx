const Form = () => {
  return (
    <div className="max-w-md mx-auto mt-4 bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg">
      <div className="md:flex">
        <div className="w-full p-4">
          <form className="flex flex-col">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                className="mt-1 block w-full border-b border-blue-600 focus:outline-none px-2"
                type="text"
                id="name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                className="mt-1 block w-full border-b border-blue-600 focus:outline-none px-2"
                type="email"
                id="email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                className="mt-1 block w-full border-b border-blue-600 focus:outline-none px-2"
                type="password"
                id="password"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                DOB:
              </label>
              <input
                className="mt-1 block w-full border-b border-blue-600 focus:outline-none px-2"
                type="date"
                id="dob"
              />
            </div>
            <div className="mb-4">
              <span className="block text-sm font-medium text-gray-700">
                Hobbies:
              </span>
              <div className="mt-1">
                <div className="flex items-center">
                  <input type="checkbox" id="reading" className="mr-2" />
                  <label htmlFor="reading" className="text-sm">
                    Reading
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="travelling" className="mr-2" />
                  <label htmlFor="travelling" className="text-sm">
                    Travelling
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="cooking" className="mr-2" />
                  <label htmlFor="cooking" className="text-sm">
                    Cooking
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="sports" className="mr-2" />
                  <label htmlFor="sports" className="text-sm">
                    Sports
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <span className="block text-sm font-medium text-gray-700">
                Gender:
              </span>
              <div className="mt-1">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    className="mr-2"
                  />
                  <label htmlFor="male" className="text-sm">
                    Male
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    className="mr-2"
                  />
                  <label htmlFor="female" className="text-sm">
                    Female
                  </label>
                </div>
              </div>
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
                className="mt-1 block w-full border-b border-purple-600 focus:outline-none px-2"
              >
                <option value="Indian">Indian</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
