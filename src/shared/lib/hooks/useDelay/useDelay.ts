import { MutableRefObject, useRef, useState } from 'react';

export const useDelay = (
    isLoading: boolean | undefined,
    delay: number = 800
): boolean => {
    const [delayLoading, setDelayLoading] = useState(true);

    const timer = useRef() as MutableRefObject<any>;

    timer.current = setTimeout(() => {
        setDelayLoading(false);
    }, delay);

    return !(!delayLoading && !isLoading);
};
