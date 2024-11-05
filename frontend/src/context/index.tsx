"use client";
import SummaryApi from "@/components/api";
import { setUserDetails } from "@/store/userSlice";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";

// Define the shape of the context
interface ContextType {
  fetchUserDetails: () => Promise<void>;
}

// Create the context with a default value of null
const Context = createContext<ContextType | null>(null);

// Create a custom hook to use the Context
export const useGeneralContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useGeneralContext must be used within a ContextProvider");
  }
  return context;
};

// Create the provider component
interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const dispatch = useDispatch();
  const fetchUserDetails = async () => {
    try {
      const response = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        dispatch(setUserDetails(data.data));
      }
      console.log("User details:", data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    /**user Details */
    fetchUserDetails();
  }, []);

  return (
    <Context.Provider value={{ fetchUserDetails }}>{children}</Context.Provider>
  );
};

export default Context;
