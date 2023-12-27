import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Pokedex from './pages/Pokedex';

import { PokemonProvider } from './context/PokemonProvider'
import DetailPokemon from './pages/DetailPokemon';


function App() {

  return (
    <BrowserRouter>
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Pokedex />} />
            <Route path=":name" element={<DetailPokemon />} />
          </Route>
        </Routes>
      </PokemonProvider>
    </BrowserRouter>
  )
}

export default App
