import { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

const useSpeechToText = () => {
    const [transcript, setValue] = useState('');
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result: string) => {
            setValue(result);
        },
    });

    return { transcript, listening, listen, stop };
};

export default useSpeechToText;