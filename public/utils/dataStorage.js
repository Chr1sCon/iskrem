async function getIceCreamData() {
    try {
        const response = await fetch('/api/icecreams');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching ice cream data:', error);
        return [];
    }
}

async function saveIceCreamData(data) {
    try {
        const response = await fetch('/api/icecreams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to save ice cream data');
        }

        return true;
    } catch (error) {
        console.error('Error saving ice cream data:', error);
        return false;
    }
}

async function clearIceCreamData() {
    try {
        const response = await fetch('/api/icecreams', {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to clear ice cream data');
        }

        return true;
    } catch (error) {
        console.error('Error clearing ice cream data:', error);
        return false;
    }
}

export { getIceCreamData, saveIceCreamData, clearIceCreamData };
