import React, { createContext, useState } from 'react'

export const searchContext = createContext("")

function ShareContext({children}) {

    const [searchKey,setsearchKey] = useState("")

  return (
    <>
    <searchContext.Provider value={{searchKey,setsearchKey}}> 
         {children}
         </searchContext.Provider>
    </>
  )
}

export default ShareContext