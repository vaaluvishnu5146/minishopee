export default function Forms() {
  return (
    <div>
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="text"
        placeholder="Enter name"
      />
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="date"
        placeholder="Enter date"
      />
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="time"
        placeholder="Enter Time"
      />
      <div>
        <label>Gender</label>
        Male:{" "}
        <input
          id="male"
          onChange={(e) => {
            console.log(e.target.id, e.target.checked);
          }}
          name="gender"
          type="radio"
        />
        Female:{" "}
        <input
          id="female"
          onChange={(e) => {
            console.log(e.target.id, e.target.checked);
          }}
          name="gender"
          type="radio"
        />
      </div>
      <div>
        <select
          onChange={(e) => {
            console.log(e.target.value);
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>
    </div>
  );
}
