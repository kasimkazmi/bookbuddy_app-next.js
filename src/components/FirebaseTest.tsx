'use client';

import React, { useEffect } from 'react';
import { auth, db, storage } from '../firebase/index'; // Adjust the path as necessary
import { signInAnonymously } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadString } from 'firebase/storage';

function FirebaseTest() {
    useEffect(() => {
        const testFirebaseAuth = async () => {
            try {
                const userCredential = await signInAnonymously(auth);
                console.log('User  signed in:', userCredential.user);
            } catch (error) {
                console.error('Error signing in:', error);
            }
        };

        const testFirestore = async () => {
            try {
                const docRef = await addDoc(collection(db, 'testCollection'), {
                    testField: 'Hello, Firestore!'
                });
                console.log('Document written with ID:', docRef.id);
            } catch (error) {
                console.error('Error adding document:', error);
            }
        };

        const testStorage = async () => {
            const storageRef = ref(storage, 'test/testFile.txt');
            try {
                await uploadString(
                    storageRef,
                    'Hello, Firebase Storage!',
                    'raw'
                );
                console.log('File uploaded successfully!');
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        };

        // Call the test functions
        testFirebaseAuth();
        testFirestore();
        testStorage();
    }, []);

    return <div>Check the console for Firebase test results.</div>;
}

export default FirebaseTest;
