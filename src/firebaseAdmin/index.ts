import * as admin from 'firebase-admin'; 

// Initialize the Firebase Admin app
export const app = admin.apps.length
    ? admin.apps[0]! // If an app is already initialized, use the existing app
    : admin.initializeApp({
          // If no app is initialized, create a new one with the following configuration
          credential: admin.credential.cert({
              projectId: process.env.NEXT_PUBLIC_PROJECT_ID, // Project ID from environment variables
              clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL, // Client email from environment variables
            //   privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, '\n') // Private key from environment variables (replace escaped newlines)
          }),
          storageBucket: 'bookbuddy-b8153.firebasestorage.app' // Specify the storage bucket for Firebase Storage
      });

// Export the Firebase Authentication service
export const auth = admin.auth(app);

// Export the Firestore database service
export const db = admin.firestore(app);

// Export the admin object for additional Firebase Admin SDK functionalities
export { admin };