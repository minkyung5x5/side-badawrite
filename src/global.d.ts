declare module 'react-speech-kit' {
    export const useSpeechRecognition: (options?: any) => {
      listen: () => void;
      listening: boolean;
      stop: () => void;
      transcript: string;
    };
    export const useSpeechSynthesis: () => any;
  }