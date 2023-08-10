import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const useCarritoContext = () => {
  return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
  const [rutaArchivo, setRutaArchivo] = useState(null);

  return (
    <CarritoContext.Provider value={{ rutaArchivo, setRutaArchivo }}>
      {children}
    </CarritoContext.Provider>
  );
};