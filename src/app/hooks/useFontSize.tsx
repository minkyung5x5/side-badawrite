import { useState } from 'react';

const useFontSize = (initialSize = 40) => {
    const [fontSize, setFontSize] = useState(initialSize);

    const decreaseFontSize = () => {
        setFontSize(prevSize => Math.max(prevSize - 1, 1));
    };

    const increaseFontSize = () => {
        setFontSize(prevSize => prevSize + 1);
    };

    return { fontSize, decreaseFontSize, increaseFontSize };
};

export default useFontSize;