import { useState, useRef, useEffect } from "react";
import musicImage from "../assets/music.png";
import music from "../assets/music2.mp3";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;

    // Fungsi untuk mengubah volume secara bertahap
    const fadeVolume = (start, end, callback) => {
      let volume = start;
      const step = (end - start) / 20; // 20 langkah untuk transisi
      const interval = setInterval(() => {
        volume = Math.max(0, Math.min(1, volume + step)); // Jaga volume antara 0 dan 1
        audio.volume = volume;
        if ((step > 0 && volume >= end) || (step < 0 && volume <= end)) {
          clearInterval(interval);
          callback?.(); // Jalankan callback setelah selesai
        }
      }, 50); // Interval waktu setiap langkah (50ms)
    };

    if (isPlaying) {
      setIsPlaying(false); // Langsung ubah tombol ke Play
      fadeVolume(audio.volume, 0, () => {
        audio.pause(); // Pause audio setelah fade-out selesai
      });
    } else {
      setIsPlaying(true); // Langsung ubah tombol ke Pause
      audio.volume = 0; // Mulai dari volume 0
      audio.play(); // Play audio
      fadeVolume(0, 1); // Fade-in ke volume maksimum
    }
  };

  //   FUNGSI PLAYER SM
  const [mini, setMini] = useState(false);

  const miniClick = () => {
    setMini(!mini);
  };

  let miniActive = mini ? "w-40" : "w-0";

  return (
    <div className="fixed bottom-5 right-5">
      <div className="group h-16 md:mr-0 bg-neutral-300 flex left-0 rounded-xl p-2 transition-all">
        <img src={musicImage} alt="" className="rounded-lg" onClick={miniClick} />
        <div className={`flex gap-4 md:w-auto ${miniActive} transition-all duration-500`}>
          <div className="ml-4 text-black flex flex-col justify-center">
            <p className="text-sm font-semibold">Hinoki Wood</p>
            <p className="text-xs">Gia Margaret</p>
          </div>
          <button className="text-black text-2xl flex items-center md:w-0 w-8 md:group-hover:w-8 transition-all duration-700" onClick={togglePlayPause}>
            {isPlaying ? <IoIosPause /> : <IoIosPlay />}
          </button>
        </div>
        <audio ref={audioRef} src={music} loop></audio>
      </div>
    </div>
  );
};

export default MusicPlayer;
