import { auth, db } from "./firebase.js";

import {
signInWithEmailAndPassword,
RecaptchaVerifier,
signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
doc,
getDoc,
setDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

let confirmationResult = null;

/* ================= EMAIL LOGIN ================= */

document.getElementById("loginBtn").onclick = async () => {

const email =
document.getElementById("email").value.trim();

const password =
document.getElementById("password").value;

if(!email || !password){
alert("Isi email dan password");
return;
}

try{

const result =
await signInWithEmailAndPassword(
auth,
email,
password
);

await saveUser(result.user);

location.href="chat.html";

}catch(e){

alert(e.message);

}

};

/* ================= RECAPTCHA ================= */

window.recaptchaVerifier =
new RecaptchaVerifier(
auth,
"recaptcha-container",
{
size:"normal"
}
);

/* ================= PHONE LOGIN ================= */

document.getElementById("phoneBtn").onclick =
async ()=>{

const phone =
document.getElementById("phone").value.trim();

if(!phone){
alert("Masukkan nomor HP");
return;
}

try{

confirmationResult =
await signInWithPhoneNumber(
auth,
phone,
window.recaptchaVerifier
);

alert("Kode OTP dikirim");

}catch(e){

alert(e.message);

}

};

/* ================= VERIFY OTP ================= */

document.getElementById("verifyBtn").onclick =
async ()=>{

if(!confirmationResult){
alert("Klik Login Nomor HP dulu");
return;
}

const code =
document.getElementById("otp").value.trim();

try{

const result =
await confirmationResult.confirm(code);

await saveUser(result.user);

location.href="chat.html";

}catch(e){

alert("OTP Salah");

}

};

/* ================= SAVE USER ================= */

async function saveUser(user){

const ref =
doc(db,"users",user.uid);

const snap =
await getDoc(ref);

if(!snap.exists()){

await setDoc(ref,{

uid:user.uid,

email:user.email || "",

phoneNumber:user.phoneNumber || "",

displayName:user.displayName || "",

photo:user.photoURL || "",

bio:"",

role:"user",

online:true,

createdAt:serverTimestamp(),

lastSeen:serverTimestamp()

});

}

}