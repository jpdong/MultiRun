import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  baseUrl: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
  baseUrl
}) => {
  const createPageUrl = (page: number) => {
    if (page > 1) {
      return `${baseUrl}?page=${page}`;
    }
    return baseUrl;
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) {
    return null;
  }

  const visiblePages = getVisiblePages();

  return (
    <nav className="flex flex-col items-center gap-4 mt-12" aria-label="Article pagination navigation">
      <div className="flex items-center gap-2 flex-wrap justify-center max-md:flex-wrap max-md:justify-center">
        {/* Previous page */}
        {hasPrevPage ? (
          <Link
            href={createPageUrl(currentPage - 1)}
            className="flex items-center gap-2 px-4 py-3 bg-white text-gray-700 no-underline rounded-lg font-medium transition-all duration-200 border border-border min-w-[44px] justify-center hover:bg-bg-card hover:-translate-y-px"
            aria-label="Previous page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
            Previous
          </Link>
        ) : (
          <span className="flex items-center gap-2 px-4 py-3 bg-white text-gray-700 rounded-lg font-medium border border-border min-w-[44px] justify-center opacity-50 cursor-not-allowed">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
            Previous
          </span>
        )}

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {visiblePages.map((page, index) => {
            if (page === '...') {
              return (
                <span key={`dots-${index}`} className="px-2 py-3 text-text-lighter">
                  ...
                </span>
              );
            }

            const pageNumber = page as number;
            const isActive = pageNumber === currentPage;

            return (
              <Link
                key={pageNumber}
                href={createPageUrl(pageNumber)}
                className={`flex items-center justify-center px-4 py-3 bg-white no-underline rounded-lg font-medium transition-all duration-200 border min-w-[44px] ${
                  isActive
                    ? 'bg-gradient-to-br from-primary to-blue-700 text-white border-blue-700'
                    : 'text-gray-700 border-border hover:bg-bg-card hover:-translate-y-px'
                }`}
                aria-label={`Page ${pageNumber}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {pageNumber}
              </Link>
            );
          })}
        </div>

        {/* Next page */}
        {hasNextPage ? (
          <Link
            href={createPageUrl(currentPage + 1)}
            className="flex items-center gap-2 px-4 py-3 bg-white text-gray-700 no-underline rounded-lg font-medium transition-all duration-200 border border-border min-w-[44px] justify-center hover:bg-bg-card hover:-translate-y-px"
            aria-label="Next page"
          >
            Next
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </Link>
        ) : (
          <span className="flex items-center gap-2 px-4 py-3 bg-white text-gray-700 rounded-lg font-medium border border-border min-w-[44px] justify-center opacity-50 cursor-not-allowed">
            Next
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </span>
        )}
      </div>

      {/* Page information */}
      <div className="text-sm text-text-lighter">
        Page {currentPage} of {totalPages}
      </div>
    </nav>
  );
};

export default Pagination;
