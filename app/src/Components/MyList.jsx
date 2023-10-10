import { useState } from "react";
const MyList = (props) => {
  // console.log(props.value);
  const { listItem, handleFilter, isEditUpdate, updateChange } = props;

  function handleDelete(id) {
    console.log(id);
    const filteredArray = listItem.filter((item) => item.id !== id);
    handleFilter(filteredArray);
  }

  function handleEdit(id) {
    isEditUpdate(id);
  }
  const handleSave = (id, value) => {
    updateChange(id, value);
  };

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

  return (
    <div className="cardDiv">
      {listItem.map((item) => {
        return (
          <div key={item.id}>
            {item.isEdit ? (
              <EditCard item={item} />
            ) : (
              <>
                <div>
                  <p>{item.value}</p>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>

                  <button onClick={() => handleDelete(item.id)}>delete</button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MyList;
