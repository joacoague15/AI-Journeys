import { onUpgradedNeeded } from './eventHandlers.js'

export const resolverIDB = (resolve, reject) => {
    const conexion = window.indexedDB.open('profile', 1)
    conexion.onsuccess = event => {
        resolve = conexion.result
    }
    conexion.onerror = error => {
        reject = error
    }
    conexion.onupgradeneeded = onUpgradedNeeded
}