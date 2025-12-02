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
    <nav className="pagination" aria-label="Article pagination navigation">
      <div className="pagination-container">
        {/* Previous page */}
        {hasPrevPage ? (
          <Link
            href={createPageUrl(currentPage - 1)}
            className="pagination-link pagination-prev"
            aria-label="Previous page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
            Previous
          </Link>
        ) : (
          <span className="pagination-link pagination-prev disabled">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
            Previous
          </span>
        )}

        {/* Page numbers */}
        <div className="pagination-pages">
          {visiblePages.map((page, index) => {
            if (page === '...') {
              return (
                <span key={`dots-${index}`} className="pagination-dots">
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
                className={`pagination-link pagination-page ${isActive ? 'active' : ''}`}
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
            className="pagination-link pagination-next"
            aria-label="Next page"
          >
            Next
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </Link>
        ) : (
          <span className="pagination-link pagination-next disabled">
            Next
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </span>
        )}
      </div>

      {/* Page information */}
      <div className="pagination-info">
        Page {currentPage} of {totalPages}
      </div>
    </nav>
  );
};

export default Pagination;
