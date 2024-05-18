import { toast } from "@/components/ui/use-toast";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface UrlContextType {
  url: string;
  handleSubmit: (newUrl: string) => void;
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

  const handleSubmit = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: "HEAD",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("Content-Type");
      console.log(contentType);

      if (contentType && !contentType.startsWith("video")) {
        throw new Error("The URL does not point to a video");
      }
      setUrl(url);
    } catch (error) {
      console.error("Error fetching the URL:", error);
      toast({
        title: "Invalid URL",
        description: "URL doesn't contain any video source",
      });
      setUrl("");
    }
  };

  return (
    <UrlContext.Provider
      value={{
        url,
        handleSubmit,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
};
