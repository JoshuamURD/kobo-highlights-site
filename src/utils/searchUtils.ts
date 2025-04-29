/**
 * Filters an array of items based on a search term
 * @param items - The array of items to filter
 * @param searchTerm - The search term to filter by
 * @param searchFields - The fields to search in
 * @returns The filtered array of items
 */
export function filterBySearchTerm<T>(
  items: T[],
  searchTerm: string,
  searchFields: (keyof T)[]
): T[] {
  if (!searchTerm.trim()) {
    return items;
  }

  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  
  return items.filter(item => {
    return searchFields.some(field => {
      const fieldValue = item[field];
      
      // Handle different types of field values
      if (typeof fieldValue === 'string') {
        return fieldValue.toLowerCase().includes(normalizedSearchTerm);
      } else if (Array.isArray(fieldValue)) {
        // For arrays, check if any item in the array matches
        return fieldValue.some(arrayItem => 
          typeof arrayItem === 'string' && 
          arrayItem.toLowerCase().includes(normalizedSearchTerm)
        );
      } else if (fieldValue && typeof fieldValue === 'object') {
        // For objects, check if any string property matches
        return Object.values(fieldValue).some(value => 
          typeof value === 'string' && 
          value.toLowerCase().includes(normalizedSearchTerm)
        );
      }
      
      return false;
    });
  });
} 