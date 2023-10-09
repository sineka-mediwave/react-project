import { useState } from "react";

const MyList = (props) => {
  // console.log(props.value);
  const { listItem, handleFilter, isEditUpdate, updateChange } = props;
  const [editValue, setEditValue] = useState("");

  function handleDelete(id) {
    console.log(id);
    const filteredArray = listItem.filter((item) => item.id !== id);
    handleFilter(filteredArray);
  }

  function handleEdit(id) {
    // setIsEdit(true);
    const index = listItem.findIndex((item) => item.id == id);
    const editForm = listItem[index];

    isEditUpdate(editForm);
  }
  const handleSave = (id, value) => {
    // updateChange(id);
    console.log(id);
    console.log(value);
  };

  return (
    <div className="cardDiv">
      {listItem.map((item) => {
        return (
          <div key={item.id}>
            {item.edit ? (
              <>
                <input
                  type="text"
                  placeholder={item.value}
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button
                  onClick={() => handleSave(item.id, editValue)}
                  type="submit"
                >
                  Save
                </button>
              </>
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
