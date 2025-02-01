
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCj8I5s4UZGywy6ZOKgGudCWSgc-uVhpto",
    authDomain: "wisdomlink-7829b.firebaseapp.com",
    projectId: "wisdomlink-7829b",
    storageBucket: "wisdomlink-7829b.firebasestorage.app",
    messagingSenderId: "618786969339",
    appId: "1:618786969339:web:186cab6ab9e1b7c22cc25e",
    measurementId: "G-49QX0MDST9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to fetch users
export async function fetchUsers() {
    const usersCollection = collection(db, "users");
    const snapshot = await getDocs(usersCollection);
    return snapshot.docs.map(doc => doc.data());
}

// Function to fetch opportunities
export async function fetchOpportunities() {
    const opportunitiesCollection = collection(db, "opportunities");
    const snapshot = await getDocs(opportunitiesCollection);
    return snapshot.docs.map(doc => doc.data());
}
