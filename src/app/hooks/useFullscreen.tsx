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

const useFullscreen = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(isFullscreenEnabled());
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

    const enterFullscreen = (): void => {
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

    const exitFullscreen = (): void => {
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

    const isFullscreenEnabled = (): boolean => {
        const doc = document as FullscreenDocument;
        return !!doc.fullscreenElement ||
            !!doc.webkitFullscreenElement ||
            !!doc.mozFullScreenElement ||
            !!doc.msFullscreenElement;
    };

    const handleFullscreen = () => {
        if (isFullscreen) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }
        setIsFullscreen(!isFullscreen);
    };

    return { isFullscreen, handleFullscreen };
};

export default useFullscreen;