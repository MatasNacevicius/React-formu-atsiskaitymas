import React, { useState } from 'react';

const AnimalForm = ({ addAnimal }) => {
  const [formData, setFormData] = useState({
    name: '',
    group: '',
    weight: '',
    isZooAnimal: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAnimal(formData);
    setFormData({ name: '', group: '', weight: '', isZooAnimal: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <select
        name="group"
        value={formData.group}
        onChange={handleChange}
        required
      >
        <option value="">Select Group</option>
        <option value="Žinduoliai">Žinduolis</option>
        <option value="Paukščiai">Paukštis</option>
        <option value="Ropliai">Roplys</option>
        <option value="Varliagyviai">Varliagyvis</option>
        <option value="Žuvys">Žuvis</option>
      </select>
      <input
        type="number"
        name="weight"
        placeholder="Weight"
        value={formData.weight}
        onChange={handleChange}
        required
      />
      <label>
        <input
          type="checkbox"
          name="isZooAnimal"
          checked={formData.isZooAnimal}
          onChange={() =>
            setFormData({ ...formData, isZooAnimal: !formData.isZooAnimal })
          }
        />
        Ar gyvena zologijos sode?
      </label>
      <button type="submit">Add animal</button>
    </form>
  );
};

export default AnimalForm;
