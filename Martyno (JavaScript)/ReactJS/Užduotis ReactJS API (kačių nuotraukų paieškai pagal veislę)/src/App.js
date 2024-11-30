import React, { useState, useEffect } from 'react';
import BreedSelector from './components/BreedSelector';
import CatGallery from './components/CatGallery';
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
    setLoading(true);
    try {
      const response = await fetch('https://api.thecatapi.com/v1/breeds', {
        headers: { 'x-api-key': API_KEY }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch breeds');
      }
      const data = await response.json();
      setBreeds(data);
    } catch (error) {
      console.error('Breeds fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCatImages = async (breedId) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=10`, {
        headers: { 'x-api-key': API_KEY }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch cat images');
      }
      const data = await response.json();
      setCatImages(data);
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
