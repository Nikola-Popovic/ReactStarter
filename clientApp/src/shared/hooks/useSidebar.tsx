import { useState, useCallback, createContext, useContext, PropsWithChildren } from 'react';

export interface SidebarContextValue {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextValue>({
  isOpen: false,
  toggleSidebar: () => undefined
});

export const SidebarProvider = (props : PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = useCallback(() => {
    setIsOpen(oldState => !oldState);
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};