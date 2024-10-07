import React, { createContext, useContext, useState, ReactNode } from "react";

interface MyContextType {
  weatherData: any;
  setWeatherData: (value: any) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<any>(null);

  return (
    <MyContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { MyProvider, useMyContext };
