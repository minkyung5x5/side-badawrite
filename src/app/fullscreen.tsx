// fullscreen.ts

export interface FullscreenElement extends HTMLElement {
    webkitRequestFullscreen?: () => Promise<void>;
    mozRequestFullScreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
}

export interface FullscreenDocument extends Document {
    webkitFullscreenElement?: Element;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    webkitExitFullscreen?: () => Promise<void>;
    mozCancelFullScreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
}

export const enterFullscreen = (): void => {
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

export const exitFullscreen = (): void => {
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

export const isFullscreenEnabled = (): boolean => {
    const doc = document as FullscreenDocument;
    return !!doc.fullscreenElement ||
        !!doc.webkitFullscreenElement ||
        !!doc.mozFullScreenElement ||
        !!doc.msFullscreenElement;
};
