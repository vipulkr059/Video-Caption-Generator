import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useUrlContext } from "@/context/UrlContext";

const UrlInput: React.FC = () => {
  const { url, handleUrlChange, handleSubmit } = useUrlContext();
  const [inputValue, setInputValue] = useState<string>(url);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUrlChange(inputValue);
    handleSubmit();
  };
  return (
    <form onSubmit={handleFormSubmit} className="w-full max-w-sm mx-auto">
      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
        <Input
          type="text"
          placeholder="Enter URL"
          value={inputValue}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default UrlInput;
