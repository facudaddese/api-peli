import { useEffect } from "react"

export const useStyle = (contenido, input, containerRef, mainRef) => {

    useEffect(() => {
        if (!containerRef) return;
        if (!mainRef) return;

        if (contenido.length === 0 && input !== "") {
            containerRef.current.style.height = "100dvh";
            mainRef.current.classList.add("empty-main");
        } else {
            containerRef.current.style.height = "100%";
            mainRef.current.classList.remove("empty-main");
        }
    }, [contenido, input, containerRef, mainRef])
}
