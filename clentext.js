import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { db } from "./clentextbase.js";


function cleanText(text){

    // URL Cleaner
    const urlRegex=/([^\s]*https?:\/\/[^\s]+)/g;

    let parts=text.split(urlRegex);
    let result="";

    for(let i=0;i<parts.length;i++){

        if(parts[i].match(urlRegex)){

            let cleanURL=parts[i]
            .replace(/.*?(https?:\/\/)/,"$1")
            .replace(/[\u{1F000}-\u{1FFFF}]/gu,"")
            .replace(/[+\-_*~`]+$/g,"");

            result+=cleanURL;

        }else{

            result+=parts[i].replace(/[+\*>'`_~#]/g,"");

        }

    }

    // Terapkan Rule Builder
    rules.forEach(rule=>{

        switch(rule.type){

            case "text":
                result=result.split(rule.value).join("");
                break;

            case "symbol":
                result=result.split(rule.value).join("");
                break;

            case "number":
                result=result.replace(new RegExp(rule.value,"g"),"");
                break;

            case "letter":
                result=result.replace(new RegExp(rule.value,"gi"),"");
                break;

        }

    });

    return result;

}

/* ===== CLEAR ===== */  
function clearText(){  

document.getElementById("textInput").value = "";  
document.getElementById("status").innerText="Teks dihapus.";  

}  

/* ===== COPY ===== */
function copyText(){

  const textarea = document.getElementById("textInput");
  let now = Now131(); // ✅ panggil SEKALI
  let tangal = getTangal();

  /* JUDUL ATAS */
  let useMass = document.getElementById("useMasslink").checked;

  let judul =
  (useMass ? "" : "/masslink ") + 
  now + "\n\n" + // ✅ pakai variable, bukan Now131() lagi
  "⬇️ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 ⬇️\n\n";

  /* TXT BAWAH */
  let tambahan =
  "\n\n" +
  "📌 𝘾𝘼𝙍𝘼 𝙈𝙀𝙇𝙀𝙒𝘼𝙏𝙄 𝙇𝙄𝙉𝙆\n" +
  "🎬 youtube.com/shorts/vyLfHIKgGCI?si=SN8ypUS-QTva1HJx\n\n" +
  tangal + "\n\n" +
  "📌 𝙉𝙊𝙏𝙀:\n" +
  "⭕ 𝐉𝐚𝐧𝐠𝐚𝐧 𝐥𝐮𝐩𝐚 𝐝𝐢 𝐬𝐡𝐞𝐫 𝐤𝐞 𝐭𝐞𝐦𝐚𝐧 𝐚𝐭𝐚𝐮 𝐬𝐢𝐚𝐩𝐚𝐩𝐮𝐧, 𝐝𝐚𝐧 𝐣𝐚𝐧𝐠𝐚𝐧 𝐥𝐮𝐩𝐚 𝐬𝐮𝐩𝐨𝐫𝐭 𝐤𝐚𝐦𝐢 𝐛𝐢𝐚𝐫 𝐤𝐚𝐦𝐢 𝐜𝐞𝐩𝐚𝐭 𝐛𝐞𝐫𝐤𝐞𝐦𝐛𝐚𝐧𝐠 𝐥𝐞𝐛𝐢𝐡 𝐛𝐚𝐢𝐤 𝐤𝐞𝐝𝐞𝐩𝐚𝐧𝐧𝐲𝐚.\n"+"🐦‍🔥 AYO KOLEKSI MODS, FILE,CONFIG, CHEATS, SEBELUM TERLAMBAT, KOLEKSI DAN JANGAN LUPA SHARE JUGA YA 🫶. ⚠️‼️#sellsingapore ‼️⚠️\n #mods #modmenu #modapk #modgame #game #gaming #gamer #mobilegaming #android #ios #onlinegame #freefire #freefiremax #ff #ffmods #ffhack #blostrike #gameode #search #tools #utility #viral #trending #fyp #explore #explorepage #gamingcommunity #games #multiplayer #battle #action #update #new #2026 #2027 #telegram #tele #dezzreal1 #global #worldwide #mobile #app #apk #gamingclips #gametools #mods2026 #viralgaming #gamersworld dezzofm.blogspot.com \n\n"+
"⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌\n";

  /* HASIL FINAL */
  let finalText = judul + cleanText(textarea.value) + tambahan;

  textarea.value = finalText;

  textarea.select();
  textarea.setSelectionRange(0,99999);
  document.execCommand("copy");

  document.getElementById("status").innerText="Teks berhasil disalin!";
}

/* ===== COUNT TEXT ===== */
const textarea = document.getElementById("textInput");
const counter = document.getElementById("counter");

textarea.addEventListener("input", updateCounter);

function updateCounter(){

let text = textarea.value;
let chars = text.length;
let lines = text.split("\n").length;

counter.innerText = "Karakter: " + chars + " | Baris: " + lines;

}

function getTangal(){
  let d = new Date();

  let tahun = d.getFullYear();
  let bulan = String(d.getMonth()+1).padStart(2,'0');
  let tanggal = String(d.getDate()).padStart(2,'0');
  let jam = String(d.getHours()).padStart(2,'0');
  let menit = String(d.getMinutes()).padStart(2,'0');
  let detik = String(d.getSeconds()).padStart(2,'0');

  return `📅 Date: ${tahun}-${bulan}-${tanggal} ⏰${jam}:${menit}:${detik}`;
}


let counterUpdate = parseInt(localStorage.getItem("counter")) || 0;

function Now131(){
  counterUpdate++;
  localStorage.setItem("counter", counterUpdate);

  let d = new Date();

  let tahun = d.getFullYear();
  let bulan = String(d.getMonth()+1).padStart(2,'0');
  let tanggal = String(d.getDate()).padStart(2,'0');
  let jam = String(d.getHours()).padStart(2,'0');
  let menit = String(d.getMinutes()).padStart(2,'0');

  return `#${counterUpdate} 𝙉𝙀𝙒 𝙐𝙋𝘿𝘼𝙏𝙀: 𝐃𝐚𝐲 #${tanggal} | ⏰${jam}.${menit} WIB`;
}

function resetCounter(){
  if(confirm("Yakin mau reset counter?")){
    counterUpdate = 0;
    localStorage.setItem("counter", 0);
    document.getElementById("status").innerText = "Counter direset!";
  }
}

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function(e){

    const circle = document.createElement("span");
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = diameter + "px";
    circle.style.left = e.clientX - this.offsetLeft - radius + "px";
    circle.style.top = e.clientY - this.offsetTop - radius + "px";

    circle.classList.add("ripple");

    const ripple = this.getElementsByClassName("ripple")[0];
    if(ripple) ripple.remove();

    this.appendChild(circle);
  });
});

let rules = [];

window.addEventListener("DOMContentLoaded", async () => {
    await loadRules();
});

async function loadRules() {

    try {

        rules = [];

        const snapshot = await getDocs(collection(db, "rules"));

        snapshot.forEach(docSnap => {
            rules.push({
                id: docSnap.id,
                ...docSnap.data()
            });
        });

        renderRules();

    } catch (err) {

        console.error(err);
        document.getElementById("status").innerText =
        err.message;

    }

}

async function addRule() {
    try {
        const type = document.getElementById("ruleType").value;
        const value = document.getElementById("ruleInput").value.trim();

        if (value === "") return;

        await addDoc(collection(db, "rules"), {
            type,
            value
        });

        document.getElementById("ruleInput").value = "";

        await loadRules();

    } catch (e) {
        console.error(e);
        alert(e.message);
    }
}

function renderRules() {

    const box = document.getElementById("ruleList");

    box.innerHTML = "";

    rules.forEach((r) => {

        box.innerHTML += `
        <div class="rule-item">
            <span>📌 <b>${r.type.toUpperCase()}</b> : ${r.value}</span>
            <button onclick="deleteRule('${r.id}')">🗑</button>
        </div>`;
    });

}

async function deleteRule(id) {

    await deleteDoc(doc(db, "rules", id));

    await loadRules();

}

/* ===== FPS COUNTER ===== */

let lastFrame = performance.now();
let frames = 0;

function updateFPS(){

  frames++;

  const now = performance.now();

  if(now >= lastFrame + 1000){

    document.getElementById("fps").innerText = frames;

    frames = 0;
    lastFrame = now;
  }

  requestAnimationFrame(updateFPS);
}

updateFPS();

/* ===== BATTERY API ===== */

if(navigator.getBattery){

  navigator.getBattery().then(function(battery){

    function updateBattery(){

      document.getElementById("battery").innerText =
      Math.floor(battery.level * 100);

    }

    updateBattery();

    battery.addEventListener("levelchange", updateBattery);

  });

}else{

  document.getElementById("battery").innerText = "--";

}

/* ===== LIVE CLOCK ===== */

function updateClock(){

  const now = new Date();

  let h = String(now.getHours()).padStart(2,'0');
  let m = String(now.getMinutes()).padStart(2,'0');
  let s = String(now.getSeconds()).padStart(2,'0');

  document.getElementById("clock").innerText =
  `${h}:${m}:${s}`;
}

setInterval(updateClock,1000);

updateClock();

/* ===== CURSOR GLOW ===== */

const glow =
document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});
window.copyText = copyText;
window.clearText = clearText;
window.resetCounter = resetCounter;
window.addRule = addRule;
window.deleteRule = deleteRule;