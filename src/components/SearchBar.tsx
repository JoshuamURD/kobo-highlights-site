import React from 'react';
import { useSearch } from '../hooks/useSearch';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (searchTerm: string) => void;
}

/**
 * A reusable search bar component
 */
const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search...", 
  className = "",
  onSearch
}) => {
  const { searchTerm, handleSearch } = useSearch();

  // Call the onSearch callback and dispatch a custom event when the search term changes
  React.useEffect(() => {
    if (onSearch) {
      onSearch(searchTerm);
    }
    
    // Dispatch a custom event for client-side filtering
    const searchEvent = new CustomEvent('search', { detail: searchTerm });
    document.dispatchEvent(searchEvent);
  }, [searchTerm, onSearch]);

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder={placeholder}
        className={`px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
};

export default SearchBar; 