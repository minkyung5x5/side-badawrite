"use client"

import Image from "next/image";
import { mic, micOff, scan, removeCircleOutline, addCircleOutline } from 'ionicons/icons';
import { IonButton, IonIcon } from '@ionic/react';

export default function Home() {
  return (
    <main className="">
      {/* <div className="text-emerald-500">{'Badawrite'}</div> */}
      <div className="relative h-screen bg-emerald-100">
        <div className="fixed bottom-0 left-0 w-full h-20 bg-emerald-500 opacity-50">
          <div className="w-full h-20 p-4 flex justify-between items-center bg-emerald-600">
            <div className="flex justify-between items-center space-x-2">
              <IonIcon className="w-10 h-10" icon={removeCircleOutline} style={{ color: 'white' }}></IonIcon>
              <div className="text-lg text-white">{"16"}</div>
              <IonIcon className="w-10 h-10" icon={addCircleOutline} style={{ color: 'white' }}></IonIcon>
            </div>
            <IonIcon className="w-10 h-10 p-2 rounded-full outline outline-2" icon={mic} style={{ color: 'white' }}></IonIcon>
            <IonIcon className="w-10 h-10 " icon={scan} style={{ color: 'white' }}></IonIcon>
            {/* <IonIcon icon={micOff} style={{ fontSize: 32, color: 'white' }}></IonIcon> */}
          </div>
        </div>
        <div className="p-4 text-xl">{'글자입력되는곳'}</div>
        <div className="fixed top-2 right-2 text-emerald-600">{'Badawrite'}</div>
      </div>
    </main>
  );
}
