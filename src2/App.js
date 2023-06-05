import React, { useState } from 'react';
import Activites from './composant/Activites';
import Total from './composant/Totale';
import Notification from './composant/Notification';
import TotalRemise from './composant/TotalRemise';

function App() {
  const [listeActivite, setListeActivite] = useState([
    {
      name: 'Raquettes à neige',
      prix: 300,
      selectionné: true,
      img: 'image/voyage.png'
    },
    {
      name: 'detente et bien etre',
      prix: 400,
      selectionné: false,
      img: 'image/carte-de-voyage.png'
    },
    {
      name: 'patrimoine et culture',
      prix: 250,
      selectionné: false,
      img: 'image/bagages-de-voyage.png'
    },
    {
      name: 'séjour en famille',
      prix: 660,
      selectionné: false,
      img: 'image/en-voyageant.png'
    }
  ]);

  return (
    <div>
      <h1>Liste des activités touristiques</h1>
      <Activites activites={listeActivite} />
      <Total activites={listeActivite} />
      <Notification activites={listeActivite} />
      <TotalRemise activites={listeActivite} />
    </div>
  );



}

export default App;
