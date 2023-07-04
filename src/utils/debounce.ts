export const debounce = (
    func: (...args: any[]) => void,
    wait: number | undefined,
    immediate?: boolean
) => {
    let timeout: number | undefined;

    return (...args: any[]) => {
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = undefined;
            if (!immediate) {
                func(...args);
            }
        }, wait);

        if (callNow) {
            func(...args);
        }
    };
};
