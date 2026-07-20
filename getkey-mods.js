const WEB_LINKS = {

    1: "https://rdxlogingetkey.netlify.app",

    2: "https://gringoxp.site/new/GetKey"

};

function openWeb(name){

    if(!WEB_LINKS[name]){
        alert("Link tidak tersedia!");
        return;
    }

    window.open(
        WEB_LINKS[name],
        "_blank",
        "noopener,noreferrer"
    );

}


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

function openlogin(){

  document.body.style.transition = "0.4s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "chat.html";
  }, 400);

}