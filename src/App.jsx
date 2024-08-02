//import { useState } from 'react'
import './css/reset.css'
import './css/default-styles.css'

import { data } from './data/character-data'

import { Header } from './components/header';
import { CharacterTable } from './components/character-table';
import { CharacterContainer } from './components/character-container';

function App() {
  return (
    <>
      <Header />
      <CharacterTable data={ data } />
      <CharacterContainer data={ data } />
    </>
  )
}

export default App
