import React from 'react';

function Activites({ activites }) {
    return (
        <div>
            {activites.map((activite, index) => (
                <div key={index}>
                    <h2>{activite.name}</h2>
                    <p>Prix : {activite.prix}</p>
                    <p>{activite.selectionné ? 'Sélectionnée' : 'Non sélectionnée'}</p>
                    <img src={activite.img} alt={activite.name} />
                </div>
            ))}
        </div>
    );
}

export default Activites;
