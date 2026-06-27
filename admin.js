import { auth, db } from "./firebase.js";

import { onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
  doc,
  getDoc,
  collection,
  onSnapshot,
  deleteDoc,
  updateDoc,
  getDocs,
  query,
  orderBy,
  limit
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// ======================
// AUTH
// ======================

onAuthStateChanged(auth, (user) => {

  if (!user) {
    location.href = "login.html";
    return;
  }

  checkAdmin(user.uid);

});

// ======================
// CHECK ADMIN
// ======================

async function checkAdmin(uid) {

  const snap = await getDoc(doc(db, "users", uid));

  if (!snap.exists() || snap.data().role !== "admin") {
    alert("Kamu bukan admin!");
    location.href = "index.html";
    return;
  }

  loadDashboard();

}

// ======================
// DASHBOARD
// ======================

function loadDashboard() {
  loadUsers();
  loadRooms();
}

// ======================
// USERS
// ======================

function loadUsers() {

  const box = document.getElementById("userList");

  onSnapshot(collection(db, "users"), (snap) => {

    box.innerHTML = "";

    snap.forEach((uDoc) => {

      const u = uDoc.data();

      const div = document.createElement("div");
      div.className = "user-card";

      div.innerHTML = `
        <div>
  <b>${u.displayName || u.username}</b>

  <div style="font-size:12px; opacity:0.8;">
    📧 ${u.email || "no email"} <br>
    🆔 ${uDoc.id}
  </div>

  <div>
  ${u.role === "admin" ? "👑 ADMIN" : "👤 USER"}<br>
  ${u.banned ? "🔴 BANNED" : "🟢 ACTIVE"}
</div>

        <div>
          <button onclick="banUser('${uDoc.id}', ${u.banned})">
            ${u.banned ? "UNBAN" : "BAN"}
          </button>
          
          <button onclick="makeAdmin('${uDoc.id}')">
  👑 ADMIN
</button>

         <button onclick="removeAdmin('${uDoc.id}')">
  ❌ ADMIN
</button>

          <button onclick="deleteUser('${uDoc.id}')">DELETE</button>
        </div>
      `;

      box.appendChild(div);

    });

  });

}

// ======================
// BAN / UNBAN
// ======================

window.banUser = async function (uid, current) {

  await updateDoc(doc(db, "users", uid), {
    banned: !current
  });

};
// ======================
// ADD ADMIN
// ======================
window.makeAdmin = async function(uid) {

  if (!confirm("Jadikan user ini sebagai admin?")) return;

  await updateDoc(doc(db, "users", uid), {
    role: "admin"
  });

  alert("User berhasil dijadikan admin.");

};
// ======================
// HAPUS ADMIN
// ======================
window.removeAdmin = async function(uid) {

  if (!confirm("Cabut hak admin user ini?")) return;

  await updateDoc(doc(db, "users", uid), {
    role: "user"
  });

  alert("Hak admin dicabut.");

};

// ======================
// DELETE USER
// ======================

window.deleteUser = async function (uid) {

  if (!confirm("Hapus user ini?")) return;

  await deleteDoc(doc(db, "users", uid));

};

// ======================
// ROOMS
// ======================

function loadRooms(){

  const box = document.getElementById("roomList");

  onSnapshot(collection(db,"rooms"),(snap)=>{

    box.innerHTML="";

    snap.forEach((r)=>{

      const data=r.data();

      const div=document.createElement("div");

      div.className="room-card";

      div.innerHTML=`
        <div>
          <b>Room:</b> ${r.id}

          <div style="font-size:12px;opacity:.8;">
            ${data.banned ? "🔴 BANNED" : "🟢 ACTIVE"}
          </div>
        </div>

        <div>

          <button onclick="viewRoom('${r.id}')">
            👁 VIEW
          </button>

          <button onclick="banRoom('${r.id}',${data.banned||false})">
            ${data.banned ? "UNBAN" : "BAN"}
          </button>

          <button onclick="deleteRoom('${r.id}')">
            DELETE
          </button>

        </div>
      `;

      box.appendChild(div);

    });

  });

}

// ======================
// VIEW ROOM
// ======================

window.viewRoom = async function(roomId){

  const modal=document.getElementById("roomModal");
  const box=document.getElementById("roomMessages");

  modal.style.display="block";

  box.innerHTML="<center>Loading...</center>";

  const q=query(
    collection(db,"rooms",roomId,"messages"),
    orderBy("time","desc"),
    limit(50)
  );

  const snap=await getDocs(q);

  box.innerHTML="";

  if(snap.empty){

    box.innerHTML="<center>Belum ada pesan.</center>";

    return;

  }

  snap.forEach((m)=>{

    const msg=m.data();

    const div=document.createElement("div");

    div.style.margin="8px 0";
    div.style.padding="10px";
    div.style.background="#333";
    div.style.borderRadius="8px";

    div.innerHTML=`
      <b>${msg.sender}</b><br>
      ${msg.text}
    `;

    box.appendChild(div);

  });

  document.getElementById("deleteBtn").onclick=()=>{

    deleteRoom(roomId);

  };

};

// ======================
// BAN ROOM
// ======================

window.banRoom = async function(roomId,current){

  await updateDoc(
    doc(db,"rooms",roomId),
    {
      banned:!current
    }
  );

};

// ======================
// DELETE ROOM
// ======================

window.deleteRoom = async function(roomId){

  if(!confirm("Yakin hapus room ini beserta semua chatnya?")) return;

  const msgSnap=await getDocs(
    collection(db,"rooms",roomId,"messages")
  );

  for(const m of msgSnap.docs){

    await deleteDoc(
      doc(db,"rooms",roomId,"messages",m.id)
    );

  }

  await deleteDoc(
    doc(db,"rooms",roomId)
  );

  closeModal();

};

// ======================
// CLOSE MODAL
// ======================

window.closeModal=function(){

  document.getElementById("roomModal").style.display="none";

};

onSnapshot(collection(db, "users"), (snap) => {
  document.getElementById("totalUser").innerText = snap.size;
});

onSnapshot(collection(db, "rooms"), (snap) => {
  document.getElementById("totalChat").innerText = snap.size;
});