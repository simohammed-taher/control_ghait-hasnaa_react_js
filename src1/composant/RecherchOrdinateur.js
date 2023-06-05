import React from 'react'

function RecherchOrdinateur(props) {
    return (
        <div>
            <h3 style={{ textDecoration: "underline", fontWeight: "bold" }}>
                Ordinateurs trouvés:
            </h3>
            <select
                multiple
                onChange={(e) => props.onSelectionChange(e.target.value)}
            >
                {props.elements.map((e, i) => (
                    <option key={i} value={e.Numero}>
                        {e.Intitulé}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default RecherchOrdinateur