import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCrp6zG18rZ4ori1rossW6-2Ho1OBdvT0c",
authDomain: "dezzofm-chat.firebaseapp.com",
projectId: "dezzofm-chat",
storageBucket: "dezzofm-chat.firebasestorage.app",
messagingSenderId: "85498233362",
appId: "1:85498233362:web:c70040692873a8216fcecb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
