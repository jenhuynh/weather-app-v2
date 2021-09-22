import * as React from "react";

const WeatherForm = () => {
  const [place, setPlace] = React.useState("");

  const canAdd = place !== "";
  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      // addTask(task);
      setPlace(place);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        City:{" "}
        <input
          onChange={(e) => setPlace(e.currentTarget.value)}
          value={place}
        />
      </label>
      <button disabled={!canAdd}>Add</button>
    </form>
  );
};

export default WeatherForm;
