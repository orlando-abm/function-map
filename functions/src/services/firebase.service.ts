import * as admin from 'firebase-admin'
import { DocumentReference, DocumentSnapshot, WriteResult } from 'firebase-admin/firestore'

export const getDocRef = async (collection: string, id: string): Promise<DocumentReference> => {
  const db = admin.firestore()
  const docRef = await db
    .collection(collection)
    .doc(id)
  return docRef
}

export const createDoc = async (docRef: DocumentReference, data: unknown): Promise<WriteResult> => {
  const doc = await docRef.create({ ...(data as object) })
  return doc
}

export const updateDoc = async (docRef: DocumentReference, data: unknown): Promise<WriteResult> => {
  const doc = await docRef.update({ ...(data as object) })
  return doc
}

export const getCollectioData = async (collecionName: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const collectionData: Array<any> = []
  const db = admin.firestore()
  const spanshot = await db.collection(collecionName).get()
  spanshot.forEach(async (doc: DocumentSnapshot) => {
    const data = doc.data()
    if (!data) return
    collectionData.push(data)
  })
  return collectionData
}

