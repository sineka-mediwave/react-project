import { useState } from "react";

const MyList = (props) => {
  // console.log(props.value);
  const { listItem, handleFilter } = props;
  const [isEdit, setIsEdit] = useState(false);

  function handleDelete(id) {
    console.log(id);
    const filteredArray = listItem.filter((item) => item.id !== id);
    handleFilter(filteredArray);
  }

  function handleEdit(id) {
    setIsEdit(true);
    const index = listItem.findIndex((item) => item.id == id);
    console.log(index);
  }
  // const myArray = [
  //   { id: 23, title: "me" },
  //   { id: 24, title: "you" },
  //   { id: 25, title: "they" },
  //   { id: 26, title: "them" },
  // ];

  // return (
  //   <div>
  //     {myArray.map((ma) => {
  //       return <p key={ma.id}>{ma.title}</p>;
  //     })}
  //   </div>
  // );

  return (
    <div className="cardDiv">
      {/* {isEdit ?( <><input type="text" ></input>
      
      </>):(save.css.display(none))} */}
      {/* {(isEdit) => {
        console.log(isEdit);
        return (
          <>
            <input type="text" />
            <button>save</button>
          </>
        );
      }} */}

      {listItem.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <p>{item.value}</p>
              <button onClick={() => handleEdit(item.id)} className="edit">
                Edit
              </button>
              {/* <button onClick={() => handleEdit(item.id)} className="save">
              Save
            </button> */}
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyList;
