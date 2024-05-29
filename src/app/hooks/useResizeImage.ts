import { useEffect } from "react"

export const useResizeImage = (Resize: () => void) => {
    useEffect(() => {
        window.addEventListener('resize', Resize);
        Resize()
        return () => {
            window.removeEventListener('resize', Resize);
        };
    }, [])
}