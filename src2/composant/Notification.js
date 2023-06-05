import React from 'react';

function Notification({ activites }) {
    const nombreSelections = activites.filter(activite => activite.selectionné).length;

    let message = '';
    if (nombreSelections === 0) {
        message = 'Aucune activité sélectionnée.';
    } else if (nombreSelections === 1) {
        message = '1 activité sélectionnée.';
    } else {
        message = `${nombreSelections} activités sélectionnées.`;
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default Notification;
