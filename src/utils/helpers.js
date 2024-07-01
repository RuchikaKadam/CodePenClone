import { signInWithRedirect } from 'firebase/auth'
import {auth} from '../config/firebase.config'
import { GoogleAuthProvider } from 'firebase/auth/web-extension'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  await signInWithRedirect(auth, googleProvider)
  .then(userCred => {
    window.location.reload()
  })
}