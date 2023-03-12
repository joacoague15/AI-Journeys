export const onUpgradedNeeded = (event) => {
    const db = (event.target).result

    if (!db.objectStoreNames.contains('character')) {
        const objectStore = db.createObjectStore('character', { keyPath: 'Id' })
        objectStore.createIndex('Name', 'Name', { unique: false })
        objectStore.createIndex('Class', 'Class', { unique: false })
    }

    if (!db.objectStoreNames.contains('attributes')) {
        const objectStore = db.createObjectStore('attributes', { keyPath: 'Id' })
        objectStore.createIndex('Strength', 'Strength', { unique: false })
        objectStore.createIndex('Dexterity', 'Dexterity', { unique: false })
        objectStore.createIndex('Constitution', 'Constitution', { unique: false })
        objectStore.createIndex('Intelligence', 'Intelligence', { unique: false })
        objectStore.createIndex('Wisdom', 'Wisdom', { unique: false })
        objectStore.createIndex('Charisma', 'Charisma', { unique: false })
    }

    if (!db.objectStoreNames.contains('inventory')) {
        const objectStore = db.createObjectStore('inventory', { keyPath: 'Id' })
        objectStore.createIndex('Helmet', 'Helmet', { unique: false })
        objectStore.createIndex('Body', 'Body', { unique: false })
        objectStore.createIndex('Leggins', 'Leggins', { unique: false })
        objectStore.createIndex('Boots', 'Boots', { unique: false })
        objectStore.createIndex('Left', 'Left', { unique: false })
        objectStore.createIndex('Right', 'Right', { unique: false })
    }
}