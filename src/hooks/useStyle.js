import { useEffect } from "react"

export const useStyle = (peliculas, input, containerRef, mainRef) => {

    useEffect(() => {

        if (!containerRef) return;
        if (!mainRef) return;

        if (peliculas.length === 0 && input !== "") {
            containerRef.current.style.height = "100dvh";
            mainRef.current.classList.add("main-empty");
        } else {
            containerRef.current.style.height = "100%";
            mainRef.current.classList.remove("main-empty");
        }
    }, [peliculas, input, containerRef, mainRef])
}
