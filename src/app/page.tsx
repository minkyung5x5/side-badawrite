"use client"

import Image from "next/image";
import { mic, micOff, scan, removeCircleOutline, addCircleOutline, exitOutline, refreshOutline, clipboardOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { useEffect, useRef, useState } from "react";
import useSpeechToText from "./components/useSpeechToText";
import useFullscreen from "./components/useFullscreen";

export default function Home() {
  const [fontSize, setFontSize] = useState(40);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { transcript, resetTranscript, copyTranscript, listening, startListening, stop } = useSpeechToText();
  const { isFullscreen, handleFullscreen } = useFullscreen();
  
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [transcript]);

  const decreaseFontSize = () => {
    setFontSize(prevSize => prevSize - 1);
  };

  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 1);
  };


  return (
    <main>
      <div className="flex flex-col h-screen bg-emerald-100">
        <div className="fixed top-1 right-1 text-emerald-600">{'Badawrite'}</div>
        <div className="h-full overflow-y-auto p-4" ref={scrollRef} style={{ fontSize: `${fontSize}px` }}>{transcript}</div>
        <div className="h-20 w-full bg-emerald-500 opacity-50">
          <div className="w-full h-20 p-4 flex justify-between items-center bg-emerald-600">
            <div className="flex justify-between items-center space-x-2">
              <IonIcon onClick={decreaseFontSize} className="w-10 h-10 text-white hover:cursor-pointer" icon={removeCircleOutline} />
              <div className="text-lg text-white">{fontSize}</div>
              <IonIcon onClick={increaseFontSize} className="w-10 h-10 text-white hover:cursor-pointer" icon={addCircleOutline} />
            </div>
            {!listening &&
              <IonIcon onClick={startListening} className="w-10 h-10 p-2 rounded-full outline outline-2 hover:cursor-pointer text-white" icon={mic} />
            }
            {listening &&
              <IonIcon onClick={stop} className="w-10 h-10 p-2 rounded-full outline outline-2 hover:cursor-pointer text-white" icon={micOff} />
            }
            <div className="flex justify-between items-center space-x-2">
              <IonIcon
                onClick={resetTranscript}
                className="w-10 h-10 hover:cursor-pointer text-white"
                icon={refreshOutline}
              />
              <IonIcon
                onClick={copyTranscript}
                className="w-10 h-10 hover:cursor-pointer text-white"
                icon={clipboardOutline}
              />
              <IonIcon
                onClick={handleFullscreen}
                className="w-10 h-10 hover:cursor-pointer text-white"
                icon={isFullscreen ? exitOutline : scan}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
