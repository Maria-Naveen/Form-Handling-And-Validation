const Input = ({ id, label, name, type, onChange, errors, max }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        className="mt-1 block w-full border-b border-purple-600 focus:outline-none px-2"
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        {...(max && { max })} //This applies only for dob input field
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
      )}
    </div>
  );
};

export default Input;
