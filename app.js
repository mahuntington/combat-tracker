const createRow = (datum) => {
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

    if(datum){
        initiativeInput.value = datum.initiative;
        nameInput.value = datum.name;
        notesInput.value = datum.notes;
    }

    document.querySelector('tbody').appendChild(newRow);
}

document.querySelector('#new').addEventListener('click', () => {
    createRow();
})

document.querySelector('#sort').addEventListener('click', () => {
    const rows = document.querySelectorAll('tbody tr');
    const data = [];

    console.log(rows);
    for(let row of rows) {
        const initiative = row.querySelector('input[type="number"]').value;
        const name = row.querySelector('input[type="text"]').value;
        const notes = row.querySelector('textarea').value;
        const datum = { initiative, name, notes };
        data.push(datum);
    }

    const sortedData = data.sort((datum1, datum2) => {
        return datum1.initiative - datum2.initiative;
    });

    document.querySelector('tbody').innerHTML = "";
    for(let datum of sortedData){
        createRow(datum)
    }
});
