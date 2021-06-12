import { MutableRefObject, useEffect, useRef, useState } from "react";

export function useIntersectionObserver(ref: MutableRefObject<Element | null>, options: IntersectionObserverInit = {}, forward: boolean = true) {
    const [element, setElement] = useState<Element | null>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observer = useRef<null | IntersectionObserver>(null);

    const cleanOb = () => {
        if (observer.current) {
            observer.current.disconnect()
        }
    }
    useEffect(() => {
        setElement(ref.current);
    }, [ref]);
    useEffect(() => {
        if (!element) return
        const ob = observer.current = new IntersectionObserver(([entry]) => {
            const isElementIntersecting = entry.isIntersecting;
            setIsIntersecting(isElementIntersecting);
        }, { ...options })
        ob.observe(element);
        return () => {
            cleanOb()
        }
    }, [element])
    return isIntersecting;
}