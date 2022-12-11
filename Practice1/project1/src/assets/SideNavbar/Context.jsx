import { createContext } from 'react';
import {React,useState} from 'react'
import App from '../../App';

export const AppContext = createContext()
export default function Context() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

      const openSidebar = () => {
        setIsSidebarOpen(true);
      };
      const closeSidebar = () => {
        setIsSidebarOpen(false);
      };
    
      const openModal = () => {
        setIsModalOpen(true);
      };
      const closeModal = () => {
        setIsModalOpen(false);
      };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      <App></App>
    </AppContext.Provider>
  )
}
