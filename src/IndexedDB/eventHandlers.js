export const onUpgradeNeeded = (event) => {
    const db = (event)

    if (!db.objectStoreNames.contains('character')) db.createObjectStore('character', { keyPath: 'Id' })

    if (!db.objectStoreNames.contains('attributes')) db.createObjectStore('attributes', { keyPath: 'Id' })

    if (!db.objectStoreNames.contains('inventory')) db.createObjectStore('inventory', { keyPath: 'Id' })

}