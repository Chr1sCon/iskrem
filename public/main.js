import {
    getIceCreamData,
    saveIceCreamData,
    clearIceCreamData
} from './utils/dataStorage.js';
import {
    incrementIceCream,
    decrementIceCream,
    addPerson,
    removePerson
} from './utils/iceCreamCounter.js';
import { sortLeaderboard } from './utils/sortLeaderboard.js'; 
import {
    createIceCreamChart,
    updateIceCreamChart
} from './utils/chartManager.js';

let iceCreamData;

(async function init() {
    iceCreamData = await getIceCreamData();
	createIceCreamChart();
    renderLeaderboard(iceCreamData);
    renderTimestampColumn(iceCreamData);
    updateIceCreamChart(iceCreamData);

    // Add event listener for adding a new person
    document.getElementById('add-person-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const nameInput = document.getElementById('person-name');
        const name = nameInput.value.trim();
        
        if (name) {
            addPerson(name, iceCreamData);
            updateIceCreamData(iceCreamData);
        }
        
        nameInput.value = '';
    });

	document.getElementById('clear-data-btn').addEventListener('click', () => {
		clearData();
	});
})();



function renderLeaderboard(iceCreamData) {
    sortLeaderboard(iceCreamData);

    const leaderboardTbody = document.getElementById('leaderboard-tbody');
    leaderboardTbody.innerHTML = '';

    iceCreamData.forEach((person, index) => {
        const personRow = document.createElement('tr');
        if (index === 0) {
            personRow.classList.add('highlight');
        }

		const removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-danger');
        removeButton.textContent = 'x';
        removeButton.addEventListener('click', () => {
            removePerson(index, iceCreamData);
            updateIceCreamData(iceCreamData);
        });

		const removeButtonCell = document.createElement('td');
        removeButtonCell.appendChild(removeButton);
        personRow.appendChild(removeButtonCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = person.name;
        personRow.appendChild(nameCell);

        const iceCreamIconsCell = document.createElement('td');
        iceCreamIconsCell.innerHTML = `${'<i class="fas fa-ice-cream"></i>'.repeat(person.iceCreamCount)}` + ` (${person.iceCreamCount})`;
        personRow.appendChild(iceCreamIconsCell);

        const decrementButton = document.createElement('button');
        decrementButton.classList.add('btn', 'btn-secondary');
        decrementButton.textContent = '-';
        decrementButton.addEventListener('click', () => {
            decrementIceCream(person);
            updateIceCreamData(iceCreamData);
        });

        const incrementButton = document.createElement('button');
        incrementButton.classList.add('btn', 'btn-primary');
        incrementButton.textContent = '+';
        incrementButton.addEventListener('click', () => {
            incrementIceCream(person);
            updateIceCreamData(iceCreamData);
        });

		const buttonCell = document.createElement('td');
        buttonCell.appendChild(decrementButton);
		buttonCell.appendChild(incrementButton);
		personRow.appendChild(buttonCell);

        leaderboardTbody.appendChild(personRow);
    });
}

function renderTimestampColumn(iceCreamData) {
    const timestampColumn = document.querySelector('#timestamp-column');
    timestampColumn.innerHTML = '';

    iceCreamData.forEach((person) => {
        const li = document.createElement('div');
        li.innerHTML = `
            <h3 class="mt-5">${person.name}:</h3>
            ${person.timestamps.map(timestamp => new Date(timestamp).toLocaleString()).join('<br>')}
        `;
        timestampColumn.appendChild(li);
    });
}

function updateIceCreamData(newData) {
    iceCreamData = newData;
    saveIceCreamData(iceCreamData);
    renderLeaderboard(iceCreamData);
    renderTimestampColumn(iceCreamData);
	updateIceCreamChart(iceCreamData);
}

function clearData() {
    clearIceCreamData();
    iceCreamData = [];
    renderLeaderboard(iceCreamData);
    renderTimestampColumn(iceCreamData);
}

// This function fetches the latest data from the server
async function updateData() {
    iceCreamData = await getIceCreamData();
    renderLeaderboard(iceCreamData);
    renderTimestampColumn(iceCreamData);
    updateIceCreamChart(iceCreamData);
}

// Fetch data every 5 seconds (5000 milliseconds)
//setInterval(updateData, 2000);