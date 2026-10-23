import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Read Firebase configuration from environment variables (Vite prefix: VITE_)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
};

// Check if valid Firebase credentials have been configured
const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.apiKey !== "YOUR_API_KEY"
);

let app = null;
let db = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
    console.log("🔥 [SuperScaleX] Firebase & Cloud Firestore initialized successfully in live mode.");
  } catch (error) {
    console.warn("⚠️ [SuperScaleX] Firebase initialization error, falling back to simulated mode:", error);
  }
} else {
  console.info(
    "💡 [SuperScaleX] Running in demo mode. All lead captures, audits, and calculations simulate live Cloud Firestore operations with instant local persistence. To connect your live Firebase project, set your VITE_FIREBASE_* keys in .env.local"
  );
}

export { app, db, isFirebaseConfigured };
