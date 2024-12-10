export const clickScrollerFactory = (
    containerDiv: HTMLElement | null,
    targetDiv: HTMLElement | null,
    isMobile: boolean,
    callbackFx: () => void = () => {}
) => {
    return () => {
        if (!containerDiv || !targetDiv) {
            return
        } else {
            const navScrollOffset = isMobile ? 96 : 48
            if (targetDiv && containerDiv) {
                const yTarget = targetDiv?.getBoundingClientRect().top + containerDiv.scrollTop - navScrollOffset
                if (containerDiv) {
                    containerDiv.scrollTo({ top: yTarget, behavior: 'smooth' })
                    callbackFx()
                }
            }
            return
        }
    }
}
