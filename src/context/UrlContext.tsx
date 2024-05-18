import React, { createContext, useContext, useState, ReactNode } from "react";

interface UrlContextType {
  url: string;
  handleUrlChange: (newUrl: string) => void;
  handleSubmit: () => void;
}

const UrlContext = createContext<UrlContextType | undefined>(undefined);

export const useUrlContext = () => {
  const context = useContext(UrlContext);
  if (!context) {
    throw new Error("useUrlContext must be used within a UrlProvider");
  }
  return context;
};

interface UrlProviderProps {
  children: ReactNode;
}

export const UrlProvider: React.FC<UrlProviderProps> = ({ children }) => {
  const [url, setUrl] = useState<string>("");

  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl);
  };

  const handleSubmit = () => {
    console.log("URL submitted:", url);
  };

  return (
    <UrlContext.Provider
      value={{
        url,
        handleUrlChange,
        handleSubmit,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
};
