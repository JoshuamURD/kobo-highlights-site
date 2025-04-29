# Kobo Highlights

A simple application to display and search through Kobo e-reader highlights.

## Features

- Display book highlights from Kobo e-reader
- Search functionality to filter books and highlights
- Responsive design for all devices

## Implementation Details

### Search Functionality

The search functionality is implemented following SOLID, DRY, KISS, and YAGNI principles:

1. **Single Responsibility Principle (SRP)**: Each component and function has a single responsibility
   - `useSearch` hook: Manages search state
   - `filterBySearchTerm` utility: Handles filtering logic
   - `SearchBar` component: Renders the search input

2. **Don't Repeat Yourself (DRY)**: Code is not duplicated
   - Reusable search hook
   - Generic filtering utility that works with any data structure

3. **Keep It Simple, Stupid (KISS)**: Simple and straightforward implementation
   - Clear and concise code
   - Minimal dependencies

4. **You Aren't Gonna Need It (YAGNI)**: Only implemented what is needed
   - No unnecessary features or abstractions

### Components

- `SearchBar`: A reusable search input component
- `BookCard`: Displays book information and highlights

### Utilities

- `useSearch`: A custom hook for managing search state
- `filterBySearchTerm`: A utility function for filtering data based on search terms

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open your browser and navigate to `http://localhost:4321`
