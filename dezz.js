const welcomeLinks = [
    "https://www.youtube.com/@DezZXMods",
    "https://www.instagram.com/dez_realmods?igsh=MTdqdXdmZDc2MzQwag==",
    "https://www.tiktok.com/@dezz_realmods"
];

let welcomeCurrent = 1;

for (let i = 1; i <= welcomeLinks.length; i++) {

    const step = document.getElementById("welcomeStep" + i);

    if (!step) continue;

    step.dataset.text = step.innerHTML;

    step.onclick = () => {

        if (i !== welcomeCurrent) {
            alert("⚠️ Selesaikan langkah sebelumnya!");
            return;
        }

        window.open(welcomeLinks[i - 1], "_blank");

        step.style.pointerEvents = "none";

        let countdown = 5;

        step.innerHTML = `⏳ Please wait ${countdown}s`;

        const timer = setInterval(() => {

            countdown--;

            if (countdown <= 0) {

                clearInterval(timer);

                step.classList.add("done");
                step.innerHTML = step.dataset.text + " ✅";

                welcomeCurrent++;

                const selesai = welcomeCurrent - 1;
                const total = welcomeLinks.length;
                const persen = (selesai / total) * 100;

                document.getElementById("welcomeProgressFill").style.width = persen + "%";

                document.getElementById("welcomeProgressText").innerHTML =
                    `${selesai}/${total} Step Complete (${persen}%)`;

                if (welcomeCurrent > total) {
                    document.getElementById("welcomeUnlockMenu").style.display = "block";

                    if (typeof confetti === "function") {
                        confetti({
                            particleCount: 120,
                            spread: 100
                        });
                    }
                }

            } else {

                step.innerHTML = `⏳ Please wait ${countdown}s`;

            }

        }, 1000);

    };

}

// JOIN DI OVERLAY 👆

const socialLinks = [
"https://whatsapp.com/channel/0029Vb7aIVe2UPBK5qaTPP1V",
"https://www.youtube.com/@DezZXMods",
"https://t.me/+nmDgMfjt-t9jYzA1",
"https://www.tiktok.com/@dezz_realmods",
"https://t.me/DezzV1bot?start=U1BFQ0lBTAeVIAAkFNbwMCAAM",
"https://sociabuzz.com/dezzreal"
];

function goLink(id){

const links = {
1: "https://dezzofm.blogspot.com",
2: "https://safefileku.com/download/ODUmAK8scIGWMxTe",
3: "https://safefileku.com/download/OvBbRK5xQPqnweqV",
4: "https://sub4unlock.co/2ueMr",
5: "https://sfl.gl/qojGlpj",
6: "https://safefileku.com/download/Tax4qOyqAQmFimxB",
7: "https://safefileku.com/download/FcCbbE4bpXMkkGvw",
8: "https://sub4unlock.co/7ku6Q9Eu",
9: "https://safefileku.com/download/xHu4FURvz5ilPHBA",
10: "https://sfl.gl/K1qE",
11: "https://sfl.gl/4Ys0F",
12: "https://move2link.co/1b68786",
13: "https://move2link.co/3e53475",
14: "https://move2link.co/a09a0e2",
15: "https://move2link.co/a9ded5d",
16: "https://move2link.co/fc9187a",
17: "https://safefileku.com/download/i1FRFBrBd9pzjp3J",
18: "https://safefileku.com/download/3WEinultZ7CMFZVo",
19:"https://sub4unlock.co/Xrn6",
20:"https://sub4unlock.co/nrS33g",
21:"https://sub4unlock.co/BPg0QmY",
22:"https://sub4unlock.co/bbtZQ5yX",
23:"https://move2link.co/892db8f",
24:"https://move2link.co/40ae8de",
25:"https://move2link.co/0118709",
26:"https://move2link.co/eac614f",
27:"https://sub4unlock.co/1DOxC",
28:"https://sub4unlock.co/b6kAK8AA"
};

if(!links[id]){
  alert("Link not available");
  return;
}

window.open(links[id], "_blank", "noopener,noreferrer");

setTimeout(() => {
  location.reload();
}, 100);
}

let current = 1;
let lastClick = 0;

for(let i = 1; i <= 6; i++){

const step = document.getElementById("step" + i);

step.dataset.text = step.innerHTML;

step.onclick = () => {

if(i !== current){
alert("⚠️ Complete the previous step first!");
return;
}

const now = Date.now();

if(current > 1 && now - lastClick < 10000){
alert("⏳ Wait 10 seconds before continuing!");
return;
}

lastClick = now;

window.open(
socialLinks[i - 1],
"_blank"
);

step.style.pointerEvents = "none";

let countdown = 10;

step.innerHTML =
`⏳ Please wait ${countdown}s`;

const timer = setInterval(() => {

countdown--;

if(countdown <= 0){

clearInterval(timer);

step.classList.add("done");

step.innerHTML =
step.dataset.text + " ✅";

current++;

if(current === 7){

  document.getElementById("unlockMenu").style.display = "block";

  if(typeof confetti === "function"){
    confetti({
      particleCount:150,
      spread:120
    });
  }

  alert("🎉 Verification Completed!");
}

const selesai = current - 1;
const persen = (selesai / 6) * 100;

document.getElementById("progressFill").style.width = persen + "%";

document.getElementById("progressText").innerHTML =
`${selesai}/6 Steps Completed (${persen}%)`;

if(current === 7){

document.getElementById("unlockMenu").style.display = "block";

}

}else{

step.innerHTML =
`⏳ Please wait ${countdown}s`;

}

},1000);

};

}

function startWebsite(){

  document.getElementById("welcomeOverlay")
  .style.display = "none";

}

const titleText = "✨DezZXOFM✨";

function typingEffect(){
  const el = document.getElementById("typingTitle");

  if(!el) return;

  el.innerHTML = "";

  let i = 0;

  function type(){
    if(i < titleText.length){
      el.innerHTML += titleText.charAt(i);
      i++;
      setTimeout(type,80);
    }
  }

  type();
}

window.addEventListener("load", () => {
  typingEffect();
});
const snowContainer = document.querySelector(".snow-container");

for(let i = 0; i <50; i++){

  const snow = document.createElement("div");

  snow.classList.add("snowflake");
  snow.innerHTML = "㋡";

  snow.style.left = Math.random() * 100 + "%";
  snow.style.fontSize = (Math.random() * 20 + 8) + "px";

  snow.style.opacity = Math.random();

  snow.style.animationDuration =
    (Math.random() * 8 + 5) + "s";

  snow.style.animationDelay =
    (Math.random() * 10) + "s";

  snowContainer.appendChild(snow);
}
// FPS COUNTER STABIL

const fpsBox = document.createElement("div");

fpsBox.style.position = "fixed";
fpsBox.style.top = "10px";
fpsBox.style.right = "10px";
fpsBox.style.padding = "8px 12px";
fpsBox.style.background = "rgba(0,0,0,.0)";
fpsBox.style.color = "#00ff66";
fpsBox.style.borderRadius = "10px";
fpsBox.style.zIndex = "999999";

document.body.appendChild(fpsBox);

let frames = 0;
let lastTime = performance.now();

function loop(now){

  frames++;

  if(now - lastTime >= 1000){

    const fps = Math.round(
      frames * 1000 / (now - lastTime)
    );

    fpsBox.innerHTML =
      `⚡ FPS: ${fps}`;

    frames = 0;
    lastTime = now;
  }

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const batteryBox = document.createElement("div");

batteryBox.style.position = "fixed";
batteryBox.style.top = "35px";
batteryBox.style.right = "10px";
batteryBox.style.color = "#00ff66";
batteryBox.style.fontSize = "13px";
batteryBox.style.zIndex = "999999";

document.body.appendChild(batteryBox);

if ('getBattery' in navigator) {

  navigator.getBattery().then(function(battery){

    function updateBattery(){

      const level =
      Math.round(battery.level * 100);

      const charging =
      battery.charging ? "⚡" : "🔋";

      batteryBox.innerHTML =
      `${charging} ${level}%`;
    }

    updateBattery();

    battery.addEventListener(
      "levelchange",
      updateBattery
    );

    battery.addEventListener(
      "chargingchange",
      updateBattery
    );

  });

}else{

  batteryBox.innerHTML =
  "🔋 N/A";
}
const clock = document.createElement("div");
document.body.appendChild(clock);

clock.style.position = "fixed";
clock.style.top = "60px";
clock.style.right = "10px";
clock.style.color = "#00e5ff";
clock.style.fontSize = "13px";
clock.style.zIndex = "999999";
setInterval(() => {
  const now = new Date();
  clock.innerHTML = `🕒 ${now.toLocaleTimeString()}`;
}, 1000);
const net = document.createElement("div");
document.body.appendChild(net);

net.style.position = "fixed";
net.style.bottom = "10px";
net.style.right = "10px";
net.style.fontSize = "13px";
net.style.zIndex = "999999";

function updateNet(){
  net.innerHTML = navigator.onLine ? "🟢 Online" : "🔴 Offline";
  net.style.color = navigator.onLine ? "#00ff66" : "#ff4444";
}

window.addEventListener("online", updateNet);
window.addEventListener("offline", updateNet);
updateNet();
const device = document.createElement("div");
document.body.appendChild(device);

device.style.position = "fixed";
device.style.bottom = "35px";
device.style.right = "10px";
device.style.color = "#cbd5e1";
device.style.fontSize = "12px";
device.style.zIndex = "999999";

device.innerHTML = `
📱 ${navigator.platform}<br>
🌐 ${navigator.userAgent.includes("Android") ? "Android" : "Desktop"}
`;
const ramBox = document.createElement("div");
document.body.appendChild(ramBox);

ramBox.style.position = "fixed";
ramBox.style.bottom = "10px";
ramBox.style.left = "10px";
ramBox.style.color = "#00e5ff";
ramBox.style.fontSize = "13px";
ramBox.style.zIndex = "999999";

const ram = navigator.deviceMemory;

ramBox.innerHTML =
ram ? `🧠 RAM ~ ${ram}GB` : `🧠 RAM: Unknown`;
function openThumbnail(){

  document.body.style.transition = "0.4s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "thumbnail.html";
  }, 400);

}

function openlogin(){

  document.body.style.transition = "0.4s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "chat.html";
  }, 400);

}

function openurl(){

  document.body.style.transition = "0.4s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "url.html";
  }, 400);

}

function openclentext(){

  document.body.style.transition = "0.4s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "clentext.html";
  }, 400);

}