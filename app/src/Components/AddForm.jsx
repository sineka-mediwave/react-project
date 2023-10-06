const AddForm = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(...value, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="items">What do you like? </label>
      <input type="text" id="items" onChange={handleChange} />
      <button>Add</button>
    </form>
  );
};

export default AddForm;
