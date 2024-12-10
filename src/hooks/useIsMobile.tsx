import { useWindowSize } from "@uidotdev/usehooks";
import { siteMobileBreakPoint } from "../globals/siteGlobals";

export function useIsMobile() {
    const window = useWindowSize()
    const width = window && window.width
    return width ? width < siteMobileBreakPoint : false
}