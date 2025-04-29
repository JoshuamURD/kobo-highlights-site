import { useState, useCallback } from 'react';

/**
 * A custom hook for handling search functionality
 * @param initialValue - The initial search term
 * @returns An object containing the search term, setter function, and handler function
 */
export function useSearch(initialValue = '') {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  /**
   * Handles search input changes
   * @param e - The change event from the input element
   */
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    handleSearch
  };
} 