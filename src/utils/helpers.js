import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../config/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    window.location.reload();
  } catch (error) {
    console.error("Error signing in with Google: ", error);
  }
};

export const signInWithGithub = async () => {
  try {
    await signInWithPopup(auth, githubProvider);
    window.location.reload();
  } catch (error) {
    console.error("Error signing in with GitHub: ", error);
  }
};
