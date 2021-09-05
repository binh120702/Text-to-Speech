const TTS_URL = "https://middlemanapi.binh120702.repl.co/addrequest/"

document.addEventListener("DOMContentLoaded", () => {
    update_speed_view();
    document.querySelector("#speed-slider").oninput = update_speed_view;
    document.querySelector("#play").onclick = play;
    document.querySelector("#download").onclick = play;
});

function update_speed_view() {
    const speed = document.querySelector("#speed-slider").value;
    document.querySelector("#speed-view").innerHTML = +speed / 10;
}

function play() {
    const text = document.querySelector("#text-input-field").value.trim();
    if (text == "")
        return;
    const speed = +document.querySelector("#speed-slider").value / 10;
    const voiceType = +document.querySelector("#voice-type").value;
    params = {
        text: text,
        voice_type: voiceType,
        voice_speed: speed,
    };

    // const req = new XMLHttpRequest();
    // req.open("GET", "tts_server.txt", true)
    // req.onload = () => {
    //     if (req.status == 200) {
    //         fetch_audio(req.responseText);
    //     }
    // };
    // req.send();

    const xhr = new XMLHttpRequest();
    xhr.open("POST", TTS_URL, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = () => {
        if (xhr.status == 200) {
            // fetch_audio(xhr.responseURL);
            attach_audio_link(xhr.responseText.slice(1, -1));
        }
    };
    xhr.send(JSON.stringify(params));
}

function fetch_audio(url) {
    audio = new Audio(url);
    audio.play();
    return audio;
}

function attach_audio_link(url) {
    const link = document.createElement("a");
    link.href = url;
    link.innerHTML = url;
    link.target = "_blank";

    const audio_link = document.querySelector("#audio-link");
    audio_link.innerHTML = "";
    audio_link.appendChild(link);
}