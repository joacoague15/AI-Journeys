import { resolverIDB } from "./registerDB.js";

export const IDBTransactionAddCharacter = async (character) => {
    new Promise(resolverIDB).then(db => new Promise((resolve, reject) => {
        const transaction = db.transaction(['character'], 'readwrite')
        const store = transaction.objectStore('character')

        store.add({ ...character, Id: 1 })


        transaction.oncomplete = event => {
            resolve(event)
        }

        transaction.onerror = event => {
            reject(event)
        }

    }))
}

export const IDBTransactionAddAttributes = (attributes) =>
    new Promise(resolverIDB).then(db => new Promise((resolve, reject) => {
        const transaction = db.transaction(['attributes'], 'readwrite')
        const store = transaction.objectStore('attributes')

        store.add({ ...attributes, Id: 1 })

        transaction.oncomplete = event => {
            resolve(event)
        }

        transaction.onerror = event => {
            reject(event)
        }

    }))

export const IDBTransactionGetFirst = (collection) =>
    new Promise(resolverIDB)
        .then(db => new Promise((resolve, reject) => {
            const transaction = db.transaction(collection, "readwrite")
            const store = transaction.objectStore(collection)

            store.getAll().onsuccess = ({ target }) => {

                if (!target) return
                if (!target.result) return

                const item = target.result

                resolve(item)
            }

            transaction.onerror = error => {
                reject(error)
            }
        }))

export const IDBTransactionGetAll = (collection) =>
    new Promise(resolverIDB)
        .then(db => new Promise((resolve, reject) => {
            const transaction = db.transaction(collection, "readwrite")
            const store = transaction.objectStore(collection)

            store.getAll().onsuccess = ({ target }) => {
                resolve(target.result)
            }
            transaction.onerror = error => {
                reject(error)
            }
        }))

export const IDBDeleteDB = () => {
    indexedDB.deleteDatabase("profile");
}