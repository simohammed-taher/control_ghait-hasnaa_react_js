import React, { useState } from 'react'
import DropList from './composant/DropList';
import RecherchOrdinateur from './composant/RecherchOrdinateur';
import FormNew from './composant/FormNew';
import InfoOrdinateur from './composant/InfoOrdinateur';
import { Ordinateurs, marques, salles } from './Data'

function App() {
  const [CurrentPC, setCurrentPC] = useState(Ordinateurs[0]);
  const [marque, setMarque] = useState(marques[0]);
  const [salle, setSalle] = useState(salles[0]);
  const [ordinateursTrouvés, setOrdinateurs] = useState(Ordinateurs);

  const changerMarque = (e) => {
    setMarque(e);
  };

  const changerSalle = (e) => {
    setSalle(e);
  };

  const rechercher = () => {
    const ordinateursFiltres = Ordinateurs.filter(
      (ordinateur) => ordinateur.Marque === marque && ordinateur.Salle === salle
    );
    setOrdinateurs(ordinateursFiltres);
  };

  const changerOrdinateur = (e) => {
    const selectedPC = ordinateursTrouvés.find((ordinateur) => ordinateur.Numero === e);
    setCurrentPC(selectedPC);
  };

  const ajouterPC = (e) => {
    var today = new Date(),
      date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    let pc = { Numero: e.Numero, Intitulé: e.Intitulé, Marque: marque, Salle: salle, DateAchat: date };
    const updatedOrdinateurs = [...Ordinateurs, pc];
    setOrdinateurs(updatedOrdinateurs);
    setCurrentPC(pc);
  };

  return (
    <>
      <div>
        <div>
          <label>Marque:</label>
          <DropList items={marques} onSelectionChange={changerMarque} />
          <label>Salle:</label>
          <DropList items={salles} onSelectionChange={changerSalle} />
          <button onClick={rechercher}>Recherche</button>
        </div>
        <div style={{ display: 'inline-block' }}>
          <RecherchOrdinateur elements={ordinateursTrouvés} onSelectionChange={changerOrdinateur} />
        </div>
        <div style={{ display: 'inline-block' }}>
          <FormNew onAddComputer={ajouterPC} />
        </div>
        <div>
          <InfoOrdinateur ordinateur={CurrentPC} />
        </div>
      </div>
    </>
  );
}


export default App