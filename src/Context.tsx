import React, { createContext, useContext, useState, ReactNode } from "react";

interface MyContextType {
  weatherData: any;
  setWeatherData: (value: any) => void;
  weatherDetail: any;
  setWeatherDetail: (value: any) => void;
  widgetColor: any;
  setWidgetColor: (value: any) => void;
  selectType: any;
  setSelectType: (value: any) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [weatherDetail, setWeatherDetail] = useState<any>(null);
  const [widgetColor, setWidgetColor] = useState<any>(null);
  const [selectType, setSelectType] = useState<any>("Celsius");

  return (
    <MyContext.Provider
      value={{
        weatherData,
        setWeatherData,
        weatherDetail,
        setWeatherDetail,
        widgetColor,
        setWidgetColor,
        selectType,
        setSelectType,
      }}
    >
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
