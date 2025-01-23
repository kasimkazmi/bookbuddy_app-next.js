import { getApps, initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId?: string; // Optional
}

const firebaseConfig: FirebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDER_ID!,
    appId: process.env.NEXT_PUBLIC_APP_ID!,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

let app: FirebaseApp | undefined;

try {
    const apps = getApps();
    app = apps.length ? apps[0]! : initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully");
} catch (error) {
    console.error("Firebase initialization error:", error);
}

// Ensure app is defined before using it
if (!app) {
    throw new Error("Firebase app is not initialized");
}

export const auth = getAuth(app); // Firebase Authentication service
export const db = getFirestore(app); // Firestore database service
export const storage = getStorage(app); // Firebase Storage service

export default app;