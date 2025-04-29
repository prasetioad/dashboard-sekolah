import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

interface UserType {
  id: number;
  name: string;
  role: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <AppContext.Provider value={{ isSidebarOpen, toggleSidebar, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};