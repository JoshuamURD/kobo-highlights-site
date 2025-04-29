import React from 'react';

interface BookEntry {
  text: string;
  note?: string;
  page: number;
  chapter: string;
}

interface BookCardProps {
  title: string;
  author: string;
  entries: BookEntry[];
  slug: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, entries, slug }) => {
  return (
    <a
      href={`/book/${slug}`}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 transition-all hover:shadow-lg hover:scale-[1.02]"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-4">
        <div className="pr-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2 line-clamp-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            By {author}
          </p>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
          {entries.length} highlights
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {entries.slice(0, 3).map((highlight, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-3 sm:pl-4 py-2">
            <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 line-clamp-2">
              {highlight.text}
            </p>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center space-x-2">
              <span className="flex items-center">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Page {highlight.page}
              </span>
            </div>
          </div>
        ))}
        {entries.length > 3 && (
          <p className="text-sm text-blue-500 dark:text-blue-400 text-center">
            View all {entries.length} highlights →
          </p>
        )}
      </div>
    </a>
  );
};

export default BookCard; 