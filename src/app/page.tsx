"use client"

import Image from "next/image";
import { mic, micOff, scan, removeCircleOutline, addCircleOutline, exitOutline, refreshOutline, clipboardOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import useSpeechToText from "./hooks/useSpeechToText";
import useFontSize from "./hooks/useFontSize";
import useFullscreen from "./hooks/useFullscreen";

export default function Home() {
  const { listening, transcript, scrollRef, resetTranscript, copyTranscript, startListening, stopListening } = useSpeechToText();
  const { fontSize, decreaseFontSize, increaseFontSize } = useFontSize();
  const { isFullscreen, handleFullscreen } = useFullscreen();
  
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
              <IonIcon onClick={stopListening} className="w-10 h-10 p-2 rounded-full outline outline-2 hover:cursor-pointer text-white" icon={micOff} />
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
