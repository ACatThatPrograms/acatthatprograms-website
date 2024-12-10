import React, { useEffect, useRef } from 'react'

const useDebouncedEffect = (effect: () => void, delay: number, deps: React.DependencyList) => {
    const callback = useRef(effect)

    useEffect(() => {
        callback.current = effect
    }, [effect])

    useEffect(() => {
        const handler = () => {
            const handle = setTimeout(() => {
                callback.current()
            }, delay)
            return () => clearTimeout(handle)
        }

        handler() // Invoke the effect immediately on mount

        window.addEventListener('resize', handler)
        return () => window.removeEventListener('resize', handler)
    }, [delay, ...deps])
}

export default useDebouncedEffect
