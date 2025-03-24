
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Set initial state
    handleResize()

    // Listen for window resize events
    window.addEventListener("resize", handleResize)

    // Use matchMedia for more accurate detection
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => handleResize()
    
    // Modern browsers use addEventListener
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      if (mql.removeEventListener) {
        mql.removeEventListener("change", onChange)
      }
    }
  }, [])

  return !!isMobile
}
