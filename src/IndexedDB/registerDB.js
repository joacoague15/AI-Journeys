import { onUpgradeNeeded } from './eventHandlers.js'

const indexedDB = window.indexedDB

export const resolverIDB = (resolve, reject) => {
    let db
    const DBOpenRequest = indexedDB.open('profile', 1)

    DBOpenRequest.onsuccess = () => {
        db = DBOpenRequest.result
        resolve(db)
    }

    DBOpenRequest.onupgradeneeded = () => onUpgradeNeeded(DBOpenRequest.result)

    DBOpenRequest.onerror = error => {
        reject(error)
    }

}