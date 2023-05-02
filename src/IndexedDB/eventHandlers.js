export const onUpgradeNeeded = (event) => {
    const db = (event)

    if (!db.objectStoreNames.contains('character')) db.createObjectStore('character', { keyPath: 'Id' })

    if (!db.objectStoreNames.contains('statuses')) db.createObjectStore('statuses', { keyPath: 'Id' })

}