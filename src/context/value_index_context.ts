import { createContext } from 'react';

export interface iValueIndexContext{
    activeIndex:number,
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
    selectedIndex:number,
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

export const viContext = createContext<iValueIndexContext|null>(null);

