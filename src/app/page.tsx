"use client"

import Image from "next/image";
import { mic, micOff, scan, removeCircleOutline, addCircleOutline, exitOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { useEffect, useState } from "react";

interface FullscreenElement extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

interface FullscreenDocument extends Document {
  webkitFullscreenElement?: Element;
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitExitFullscreen?: () => Promise<void>;
  mozCancelFullScreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
}

export default function Home() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as FullscreenDocument;
      setIsFullscreen(
        !!doc.fullscreenElement ||
        !!doc.webkitFullscreenElement ||
        !!doc.mozFullScreenElement ||
        !!doc.msFullscreenElement
      );
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const handleFullscreen = () => {
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
    setIsFullscreen(!isFullscreen); // Toggle fullscreen state
  };

  const enterFullscreen = () => {
    const element = document.documentElement as FullscreenElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { // Safari
      element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    const doc = document as FullscreenDocument;
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.webkitExitFullscreen) { // Safari
      doc.webkitExitFullscreen();
    } else if (doc.mozCancelFullScreen) { // Firefox
      doc.mozCancelFullScreen();
    } else if (doc.msExitFullscreen) { // IE/Edge
      doc.msExitFullscreen();
    }
  };

  return (
    <main>
      {/* <div className="text-emerald-500">{'Badawrite'}</div> */}
      <div className="relative h-screen bg-emerald-100">
        <div className="fixed bottom-0 left-0 w-full h-20 bg-emerald-500 opacity-50">
          <div className="w-full h-20 p-4 flex justify-between items-center bg-emerald-600">
            <div className="flex justify-between items-center space-x-2">
              <IonIcon className="w-10 h-10 text-white hover:cursor-pointer" icon={removeCircleOutline} />
              <div className="text-lg text-white">{"16"}</div>
              <IonIcon className="w-10 h-10 text-white hover:cursor-pointer" icon={addCircleOutline} />
            </div>
            <IonIcon className="w-10 h-10 p-2 rounded-full outline outline-2 hover:cursor-pointer text-white" icon={mic} />
            <IonIcon
              onClick={handleFullscreen}
              className="w-10 h-10 hover:cursor-pointer text-white"
              icon={isFullscreen ? exitOutline : scan}
            />
            {/* <IonIcon icon={micOff} style={{ fontSize: 32, color: 'white' }}></IonIcon> */}
          </div>
        </div>
        <div className="p-4 text-xl">{'글자입력되는곳'}</div>
        <div className="fixed top-2 right-2 text-emerald-600">{'Badawrite'}</div>
      </div>
    </main>
  );
}
