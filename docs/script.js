const TTS_URL = "https://middlemanapi.binh120702.repl.co/addrequest/"

document.addEventListener("DOMContentLoaded", () => {
    update_speed_view();
    document.querySelector("#speed-slider").oninput = update_speed_view;
    document.querySelector("#play").onclick = play;
});

function update_speed_view() {
    const speed = document.querySelector("#speed-slider").value;
    document.querySelector("#speed-view").innerHTML = +speed / 10;
}

function play() {
    const speed = +document.querySelector("#speed-slider").value / 10;
    const text = document.querySelector("#text-input-field").value;
    const voiceType = +document.querySelector("#voice-type").value;
    params = {
        text: text,
        voice_type: voiceType,
        voice_speed: speed,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", TTS_URL, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = () => {
        if (xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send(params);
}