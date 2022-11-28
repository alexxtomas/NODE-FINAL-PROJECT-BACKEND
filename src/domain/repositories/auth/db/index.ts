import { applicationDefault, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const databaseURL = process.env.AUTH_FIREBASE_URL
const credentails = process.env.GOOGLE_APPLICATION_CREDENTIALS
if (!databaseURL || !credentails)
  throw new Error('no firebase database url or credentials provided')
initializeApp({
  credential: applicationDefault(),
  databaseURL
})

const db = getFirestore()

export default db
