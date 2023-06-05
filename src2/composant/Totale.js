import React from 'react';

function Total({ activites }) {
    const prixTotal = activites
        .filter(activite => activite.selectionné)
        .reduce((total, activite) => total + activite.prix, 0);

    return (
        <div>
            <h2>Total des activités sélectionnées :</h2>
            <p>Prix total : {prixTotal} euros</p>
        </div>
    );
}

export default Total;
