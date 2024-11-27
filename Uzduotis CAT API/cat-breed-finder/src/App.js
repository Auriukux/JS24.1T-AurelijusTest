import React, { useState, useEffect } from 'react';
import BreedSelector from './components/BreedSelector';
import CatGallery from './components/CatGallery';
import axios from 'axios';
import './App.css';

function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreedId, setSelectedBreedId] = useState(undefined);
  const [catImages, setCatImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = 'live_dpqb9IO4MLAbIDndfg5SCokxM3rKRY3FdlujKC4wDZtDjfnK0tGMfFaFb3NtiaVH';

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
        headers: { 'x-api-key': `${API_KEY}` }
      });
      setBreeds(response.data);
    } catch (error) {
      console.error('Breeds fetch error:', error);
    }
  };

  const fetchCatImages = async (breedId) => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
        params: { breed_ids: breedId, limit: 10 },
        headers: { 'x-api-key': `${API_KEY}` }
      });
      setCatImages(response.data);
    } catch (error) {
      console.error('Images fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBreedSelect = (breedId) => {
    setSelectedBreedId(breedId);
    if (breedId) {
      fetchCatImages(breedId);
    } else {
      setCatImages([]);
    }
  };

  return (
    <div className="App">
      <h1>Katinų veislių ieškotojas:</h1>
      <BreedSelector breeds={breeds} onSelectBreed={handleBreedSelect} />
      {loading && <p>Palaukite...</p>}
      <CatGallery images={catImages} />
    </div>
  );
}

export default App;