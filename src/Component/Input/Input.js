import "./Input.css";

const Input = ({ type, placeholder, name, register }) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            {...register(name)}
        />
    );
};

export default Input;
