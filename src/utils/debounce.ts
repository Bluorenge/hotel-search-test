export const debounce = <T extends (...args: any[]) => void>(
    func: T,
    wait: number | undefined,
    immediate?: boolean
) => {
    let timeout: number | undefined;

    return ((...args: any[]) => {
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
    }) as T;
};
