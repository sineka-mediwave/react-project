const EditCard = (props) => {
  const { item } = props;
  const [editValue, setEditValue] = useState(item.value);
  const handleChange = (e) => setEditValue(e.target.value);

  return (
    <>
      <input
        id={item.id}
        type="text"
        placeholder={item.value}
        value={editValue}
        onChange={handleChange}
      />
      <button onClick={() => handleSave(item.id, editValue)}>Update</button>
    </>
  );
};

export default EditCard;
