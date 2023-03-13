import {createContext, useState} from 'react';

export const ServiceContext = createContext();

const ServiceContextProvider = ({children}) => {
  const [serviceData, setServiceData] = useState();

  const values = {serviceData, setServiceData};

  return (
    <ServiceContext.Provider value={values}>{children}</ServiceContext.Provider>
  );
};

export default ServiceContextProvider;
