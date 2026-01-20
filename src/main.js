import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const soundBtn = document.getElementById('soundBtn');
    const video = document.getElementById("bgVideo");
    const icon = document.getElementById("soundIcon");

    if (soundBtn && video && icon) {
        soundBtn.addEventListener('click', () => {
            if (video.muted) {
                video.muted = false;
                icon.classList.remove("fa-volume-mute");
                icon.classList.add("fa-volume-up");
            } else {
                video.muted = true;
                icon.classList.remove("fa-volume-up");
                icon.classList.add("fa-volume-mute");
            }
        });
    }
});
// 動画要素とメッセージ要素を取得
const video = document.getElementById('bgVideo');
const msg = document.getElementById('lowPowerMsg');

if (video) {
    // 1. 再生が始まったら動画を表示（フェードイン）
    video.addEventListener('play', () => {
        video.classList.remove('opacity-0');
        // 再生できたらメッセージは隠す（念のため）
        if(msg) msg.classList.add('hidden');
    });

    // 2. 自動再生を試みる
    const playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // ここに来るのは「省電力モード」などで自動再生がブロックされた時
            console.log('Autoplay prevented (Low Power Mode etc.)');
            
            // 動画は透明のまま（裏のポスター画像が見える状態）にして、
            // メッセージを表示する
            if(msg) msg.classList.remove('hidden');
        });
    }
}