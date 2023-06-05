import React, { useState } from 'react';

function TotalRemise({ activites }) {
    const [nombreAdultes, setNombreAdultes] = useState(0);

    const prixTotal = activites
        .filter(activite => activite.selectionné)
        .reduce((total, activite) => total + activite.prix, 0);

    const remise = 0.1; // 10% de remise

    const totalApresRemise = prixTotal - (prixTotal * remise * nombreAdultes);

    const handleChangeNombreAdultes = (event) => {
        const valeur = event.target.value;
        setNombreAdultes(Number(valeur));
    };

    return (
        <div>
            <h2>Total après remise :</h2>
            <p>Prix total avant remise : {prixTotal} euros</p>
            <div>
                <label htmlFor="nombreAdultes">Nombre d'adultes :</label>
                <input
                    type="number"
                    id="nombreAdultes"
                    value={nombreAdultes}
                    onChange={handleChangeNombreAdultes}
                />
            </div>
            <p>Prix total après remise : {totalApresRemise} euros</p>
        </div>
    );
}

export default TotalRemise;
