import { useEffect, useState } from "react"

// export const useResizeImage = () => {
    // Размер фото
    // const [widthPhoto, setWidthPhoto] = useState(600)
    // const [heightPhoto, setHeightPhoto] = useState(500)
    // const [sizeArrow, setSizeArrow] = useState(30)
    // const [sizeIcon, setSizeIcon] = useState(50)

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.screen.width >= 640) {
    //             setWidthPhoto(600)
    //             setHeightPhoto(500)
    //         }
    //         if (window.screen.width < 640) {
    //             setWidthPhoto(500)
    //             setHeightPhoto(400)
    //             // setSizeIcon(40)
    //         }
    //         if (window.screen.width < 530) {
    //             setWidthPhoto(400)
    //             setHeightPhoto(300)
    //         }
    //         if (window.screen.width < 430) {
    //             setWidthPhoto(270)
    //             setHeightPhoto(200)
    //             // setSizeArrow(25)
    //             // setSizeIcon(30)
    //         }
    //     };
    //     window.addEventListener('resize', handleResize);
    //     handleResize()
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, [])
    // return {width: widthPhoto, height: heightPhoto}
// }


export const useResizeImage = (Resize: () => void) => {
    useEffect(() => {
        window.addEventListener('resize', Resize);
        Resize()
        return () => {
            window.removeEventListener('resize', Resize);
        };
    }, [])
}