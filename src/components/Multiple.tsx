import React, {useState} from "react";

 const Multiple: React.FC =  ( )=>{

const [inputFields, setInputFields] = useState<[{}]>([{ items: "" }]);
  const handleFormChange = ( index: number, event:  React.FormEvent<HTMLInputElement>): void => {
    let data : any={...inputFields};
    data[index][event.currentTarget.name] = event.currentTarget.value;
    setInputFields(data);
  };

  const addFields: React.MouseEventHandler<HTMLButtonElement>= (): void=> {
    let newfield = { items: "" }

    setInputFields({...inputFields , newfield});
  };

 const submit = (event: React.FormEvent): void => {
   event.preventDefault();
   console.log(inputFields);
 };
  return (
    <form onSubmit={submit}>
      {inputFields.map((items: any) => {
        return (
          <div key={items.id}>
            <input
              name="items"
              placeholder="items"
              onChange={(event) => handleFormChange(items, event)}
            />
            <button onClick={addFields}>Add More..</button>
            <button onClick={submit}>Submit</button>
          </div>
        );
      })}
    </form>
  );
};

export default Multiple
