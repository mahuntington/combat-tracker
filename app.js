document.querySelector('button').addEventListener('click', () => {
    const newRow = document.createElement('tr')

    const initiative = document.createElement('td');
    const initiativeInput = document.createElement('input');
    initiativeInput.setAttribute('type', 'number');
    initiativeInput.setAttribute('placeholder', 'initiative');
    initiative.appendChild(initiativeInput);

    const name = document.createElement('td');
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'name');
    name.appendChild(nameInput);

    const notes = document.createElement('td');
    const notesInput = document.createElement('textarea');
    notesInput.setAttribute('placeholder', 'notes');
    notes.appendChild(notesInput);

    newRow.appendChild(initiative);
    newRow.appendChild(name);
    newRow.appendChild(notes);

    document.querySelector('table').appendChild(newRow);

})
