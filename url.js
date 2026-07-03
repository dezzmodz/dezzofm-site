function status(text){
    document.getElementById("status").innerText = text;
}

function generate(){

    const t0 = performance.now();

    const u = document.getElementById("url").value.trim();
    const a = parseInt(document.getElementById("awal").value);
    const b = parseInt(document.getElementById("akhir").value);

    if(!u){
        status("Masukkan URL.");
        return;
    }

    if(isNaN(a) || isNaN(b)){
        status("Masukkan angka yang valid.");
        return;
    }

    if(a > b){
        status("Angka awal tidak boleh lebih besar.");
        return;
    }

    const separator = document.getElementById("separator").value;
    const grup = parseInt(document.getElementById("grup").value) || 5;

    let hasil = "";
    let count = 0;

    const total = b - a + 1;

    for(let i = a; i <= b; i++){

        hasil += u + separator + i + "\n";

        count++;

        if(count % grup === 0 && i < b){
            hasil += "\n";
        }

        document.getElementById("bar").style.width =
            ((count / total) * 100) + "%";
    }

    document.getElementById("hasil").value = hasil;

    document.getElementById("jumlah").innerText = total;

    document.getElementById("waktu").innerText =
        (performance.now() - t0).toFixed(2) + " ms";

    status("✅ Berhasil membuat " + total + " URL");
}

async function copyText(){

    const text = document.getElementById("hasil").value;

    if(text === ""){
        status("Belum ada hasil.");
        return;
    }

    try{
        await navigator.clipboard.writeText(text);
        status("📋 Berhasil disalin.");
    }catch{
        status("Gagal menyalin.");
    }
}

function clearAll(){

    document.getElementById("hasil").value = "";

    document.getElementById("jumlah").innerText = "0";

    document.getElementById("waktu").innerText = "0 ms";

    document.getElementById("bar").style.width = "0%";

    status("🗑 Data dibersihkan.");
}

function downloadTxt(){

    const text = document.getElementById("hasil").value;

    if(text === ""){
        status("Belum ada hasil.");
        return;
    }

    const blob = new Blob([text], {
        type: "text/plain"
    });

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    a.download = "hasil-url.txt";

    a.click();

    URL.revokeObjectURL(a.href);

    status("⬇ Download dimulai.");
}

document.addEventListener("keydown", function(e){

    if(e.key === "Enter"){
        generate();
    }

});