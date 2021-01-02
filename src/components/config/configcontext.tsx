import React from 'react'

const defaultConfig = {
    schemaBaseUrl: "http://localhost:3000/schema/"
}

export const ConfigContext = React.createContext(defaultConfig)

export const ConfigProvider = ConfigContext.Provider