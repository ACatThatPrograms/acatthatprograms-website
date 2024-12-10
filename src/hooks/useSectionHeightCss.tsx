import { useWindowSize } from '@uidotdev/usehooks'
import { footerHeight, navHeightMobile, navHeightWeb, siteMobileBreakPoint } from '../globals/siteGlobals'

export function useSectionHeightCss(isNavHidden: boolean): any {
    const size = useWindowSize()

    // Footer height is 32px
    const fh = footerHeight

    const webHeightDeduction = isNavHidden ? 0 : navHeightWeb
    const mobHeightDeduction = isNavHidden ? 0 : navHeightMobile

    return size.width && size.width > siteMobileBreakPoint
        ? {
              minHeight: `calc(100vh - ${webHeightDeduction}px - ${fh}px)`,
              marginTop: `calc(${webHeightDeduction}px)`,
          }
        : {
              minHeight: `calc(100vh - ${mobHeightDeduction}px - ${fh}px)`,
              marginTop: `calc(${mobHeightDeduction}px)`,
          }
}
