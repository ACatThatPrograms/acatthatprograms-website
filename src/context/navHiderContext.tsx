import { createContext } from 'react'
import React, { Dispatch } from 'react'

export type NavHiderContextInterface = {
    shouldHideNav: boolean,
    setShouldHideNav: undefined | Dispatch<React.SetStateAction<boolean>>
}

export const NavHiderContext = createContext<NavHiderContextInterface>({
    shouldHideNav: false,
    setShouldHideNav: undefined,
})
