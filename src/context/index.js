'use client'
import { createContext, useState } from "react";

export const GlobalContext= createContext(null); 

export default function GlobalState ({children}){
    const [showModal,setShowModal]=useState(flase)
    return <GlobalContext.Provider value={{showModal,setShowModal}}>{children}</GlobalContext.Provider>
}