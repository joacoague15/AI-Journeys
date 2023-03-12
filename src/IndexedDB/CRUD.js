import { resolverIDB } from "./registerDB.js";

export const IDBTransactionUpdateCharacter = async (character) => {
    return new Promise(resolverIDB)
        .then(db => new Promise((resolve, reject) => {
            const transaction = db.transaction(['character'], 'readwrite')
            const store = transaction.objectStore('character')

            store.add(character)

            transaction.oncomplete = event => {
                resolve(event)
            }

            transaction.onerror = event => {
                reject(event)
            }

        }))
}

export const IDBTransactionGetFirst = (collection, where) =>
    new Promise(resolverIDB)
        .then(db => new Promise((resolve, reject) => {
            const transaction = db.transaction(collection, "readwrite")
            const store = transaction.objectStore(collection)

            store.getAll().onsuccess = ({ target }) => {
                if (!target) return
                if (!target.result) return
                const item = where ? target.result.find(where) : target.result.pop()
                resolve(item)
            }

            transaction.onerror = error => {
                reject(error)
            }
        }))