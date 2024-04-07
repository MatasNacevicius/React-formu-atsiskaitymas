import './App.css';
import AnimalForm from './Components/AnimalForm';
import AnimalList from './Components/AnimalList';
import SortDropdown from './Components/SortDropdown';
import React, { useState, useEffect } from 'react';

function App() {
  const initialData = JSON.parse(localStorage.getItem('animals')) || [];
  const [animals, setAnimals] = useState(initialData);
  const [sortBy, setSortBy] = useState('name_ASC');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('animals', JSON.stringify(animals));
  }, [animals]);

  const addAnimal = (formData) => {
    setAnimals([...animals, formData]);
  };

  const deleteAnimal = (index) => {
    const updatedAnimals = animals.filter((_, i) => i !== index);
    setAnimals(updatedAnimals);
  };

  const handleSort = (value) => {
    setSortBy(value);
  };


  const filteredAnimals = animals.filter(animal => {
    const nameMatchesFilter = animal.name.toLowerCase().includes(filter.toLowerCase());
    const weightMatchesFilter = animal.weight.toString().toLowerCase().includes(filter.toLowerCase());

    return nameMatchesFilter || weightMatchesFilter;
  });

  const sortedAnimals = filteredAnimals.slice().sort((a, b) => {
    const [sortByKey, sortOrder] = sortBy.split('_');

    if (sortByKey === 'weight') {
      const weightA = parseFloat(a.weight);
      const weightB = parseFloat(b.weight);

      return sortOrder === 'ASC' ? weightA - weightB : weightB - weightA;
    } else {
      const valueA = a[sortByKey];
      const valueB = b[sortByKey];

      return sortOrder === 'ASC' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }
  });

  return (
    <div className="App">
      <h1>Animal form</h1>
      <AnimalForm addAnimal={addAnimal} />
      <h1>Animal list</h1>
      <div>
        <SortDropdown handleSort={handleSort} />
      </div>
      <AnimalList animals={sortedAnimals} deleteAnimal={deleteAnimal} />
    </div>
  );
}

export default App;
