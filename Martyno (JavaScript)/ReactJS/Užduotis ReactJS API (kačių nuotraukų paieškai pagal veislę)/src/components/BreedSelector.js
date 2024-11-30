import React from 'react';

const BreedSelector = ({ breeds, onSelectBreed }) => (
    <select onChange={(e) => onSelectBreed(e.target.value)}>
        <option value="">Pasirinkti veislę</option>
        {breeds.map((breed) => (
            <option key={breed.id} value={breed.id}>{breed.name}</option>
        ))}
    </select>
);

export default BreedSelector;