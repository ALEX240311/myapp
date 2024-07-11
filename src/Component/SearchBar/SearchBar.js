import { useForm } from "react-hook-form";
import "./SearchBar.css";
import Input from "../Input";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = handleSubmit((data) => {
        navigate("/detailFlight", { state: data });
    });
    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <div className="trip-type">
                    <label>
                        <input type="radio" value="round-trip" />
                        Round-trip
                    </label>
                    <label>
                        <input type="radio" value="one-way" />
                        One-way
                    </label>
                </div>
                <form className="fields" onSubmit={onSubmit}>
                    <Input
                        type="text"
                        placeholder="From"
                        register={register}
                        name="from"
                    />
                    <Input
                        type="text"
                        placeholder="To"
                        register={register}
                        name="to"
                    />
                    <Input
                        name="departureDate"
                        type="date"
                        placeholder="Departure Date"
                        register={register}
                    />
                    <Input
                        name="returnDate"
                        type="date"
                        placeholder="Return Date"
                        register={register}
                    />
                    <input
                        min={1}
                        name="passengers"
                        type="number"
                        {...register("passengers")}
                    />
                    <select {...register("service")}>
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="first-class">First Class</option>
                    </select>
                    <button>Book FLight</button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
