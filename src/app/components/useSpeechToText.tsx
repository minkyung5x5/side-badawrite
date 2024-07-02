import { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

const useSpeechToText = () => {
    const [transcript, setTranscript] = useState('');

    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result: string) => {
            setTranscript(result);
        },
    });

    const resetTranscript = () => {
        setTranscript('');
    }

    const copyTranscript = () => {
        navigator.clipboard.writeText(transcript)
            .then(() => {
                alert('받아쓴 내용을 복사했어요!');
            })
            .catch(err => {
                console.error('Failed to copy:', err);
                alert('복사에 실패했어요. 다시 시도해주세요.');
            });
    }

    return { transcript, resetTranscript, copyTranscript, listening, listen, stop };
};

export default useSpeechToText;