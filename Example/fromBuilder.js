import React, { useState, memo } from "react";

const Field = memo(({ field, updateField }) => (
  <input
    type={field.type}
    placeholder={field.placeholder}
    value={field.value}
    onChange={(e) => updateField(field.id, e.target.value)}
  />
));

const FormBuilder = () => {
  const [fields, setFields] = useState([]);

  const addField = () =>
    setFields([...fields, { id: Date.now(), type: "text", value: "" }]);

  const updateField = (id, value) => {
    setFields(fields.map((f) => (f.id === id ? { ...f, value } : f)));
  };

  return (
    <div>
      {fields.map((field) => (
        <Field key={field.id} field={field} updateField={updateField} />
      ))}
      <button onClick={addField}>Add Field</button>
    </div>
  );
};

export default FormBuilder;
