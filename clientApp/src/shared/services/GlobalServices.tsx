import React from 'react';
import { ServiceProps } from './Types';
import { SidebarProvider } from '../hooks/useSidebar';


const GlobalServices: React.FC<ServiceProps> = ({children}: ServiceProps) => {
  return <SidebarProvider>
    {children}
  </SidebarProvider>;
};

export default GlobalServices;