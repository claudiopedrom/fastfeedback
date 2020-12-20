import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

/**
 * Initialize the application with the keys.
 * Avoid to initialize multiple times (if we haven't
 * already initialized the application, then do it).
 */
if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export default firebase;
