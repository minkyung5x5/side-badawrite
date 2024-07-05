"use client";

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
    <main className="h-screen bg-emerald-100 flex flex-col">
      <header className="fixed top-1 right-1 text-emerald-600">
        Badawrite
      </header>
      {(listening || transcript !== '') && (
        <div className="flex-1 overflow-y-auto p-4" ref={scrollRef} style={{ fontSize: `${fontSize}px` }}>
          {transcript}
        </div>
      )}
      {!listening && transcript === '' && (
        <div className="relative flex-1 overflow-y-auto text-lg text-emerald-800 transition ease-in-out delay-300">
          <div className='absolute w-full bottom-1 flex justify-between'>
            <div className='pl-4'>{'글자 크기 바꾸기'}</div>
            <div>{'마이크 켜기/끄기'}</div>
            <div className='pr-1 flex space-x-2.5'>
              <div>{'삭제'}</div>
              <div>{'복사'}</div>
              <div>{'전체화면'}</div>
            </div>
          </div>
          <div className='text-emerald-600 text-lg p-4'>
            <div>{'• 데스크탑 환경에서 구글 크롬 브라우저를 기준으로 개발되었습니다.'}</div>
            <div>{'• 모바일, 크로스 브라우징 지원을 위해 추가 개발 중입니다.'}</div>
          </div>
        </div>
      )}
      <nav className="h-20 w-full bg-emerald-500 opacity-50">
        <div className="w-full h-full p-4 flex justify-between items-center bg-emerald-600">
          <div className="flex items-center space-x-2">
            <IonIcon
              onClick={decreaseFontSize}
              className="w-10 h-10 text-white hover:cursor-pointer"
              icon={removeCircleOutline}
              aria-label="Decrease Font Size"
            />
            <div className="text-lg text-white">{fontSize}</div>
            <IonIcon
              onClick={increaseFontSize}
              className="w-10 h-10 text-white hover:cursor-pointer"
              icon={addCircleOutline}
              aria-label="Increase Font Size"
            />
          </div>
          <IonIcon
            onClick={listening ? stopListening : startListening}
            className="w-10 h-10 p-2 rounded-full outline outline-2 hover:cursor-pointer text-white"
            icon={listening ? micOff : mic}
            aria-label={listening ? "Stop Listening" : "Start Listening"}
          />
          <div className="flex items-center space-x-2">
            <IonIcon
              onClick={resetTranscript}
              className="w-10 h-10 hover:cursor-pointer text-white"
              icon={refreshOutline}
              aria-label="Reset Transcript"
            />
            <IonIcon
              onClick={copyTranscript}
              className="w-10 h-10 hover:cursor-pointer text-white"
              icon={clipboardOutline}
              aria-label="Copy Transcript"
            />
            <IonIcon
              onClick={handleFullscreen}
              className="w-10 h-10 hover:cursor-pointer text-white"
              icon={isFullscreen ? exitOutline : scan}
              aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            />
          </div>
        </div>
      </nav>
    </main>
  );
}
