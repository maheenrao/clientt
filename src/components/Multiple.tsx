import React, {useState} from "react";

 const Multiple: React.FC =  ( )=>{

const [inputFields, setInputFields] = useState([{ items: []}]);
  const handleFormChange = ( index: any, event:  React.FormEvent<HTMLInputElement>): void => {
  let data: any  = [...inputFields];
    data[index][event.currentTarget.name] = event.currentTarget.value;
    setInputFields(data);
   
  }

  const addFields: React.MouseEventHandler<HTMLButtonElement>= (): void=> {
    let newfield = { items:[] } 
    setInputFields([...inputFields, newfield]);
    console.log(newfield);
  };

 const submit = (event: React.FormEvent): void => {
   event.preventDefault();
   console.log(inputFields);
 };
  return (
    <form onSubmit={submit}>
      <ul>
        {inputFields.map((input: any, index: any) => {
          return (
            <div key={index.id}>
              <input
                name="items"
                placeholder="items"
                value={input.items}
                onChange={(event) => handleFormChange(index, event)}
              />
              <button onClick={addFields}>Add More..</button>
              {/* <button onClick={submit}>Submit</button> */}
            </div>
          );
        })}
      </ul>
    </form>
  );
};

export default Multiple
