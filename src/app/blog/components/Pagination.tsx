'use client'

import Link from 'next/link'
import { GrNext, GrPrevious } from 'react-icons/gr'

interface PaginationProps {
    currentPage: number
    totalPages: number
    basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
    const getPageArray = () => {
        const pages: (number | string)[] = []
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i)
        } else {
            pages.push(1)
            if (currentPage > 4) pages.push('...')
            for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
                pages.push(i)
            }
            if (currentPage < totalPages - 3) pages.push('...')
            pages.push(totalPages)
        }
        return pages
    }

    return (
        <div className="flex justify-center mt-12 flex-col items-center gap-2 text-large">
            <div className="inline-flex items-center space-x-2 p-2 topic-card rounded-full shadow-md text-large secondary-text">
                {/* Previous */}
                <Link
                    href={`${basePath}?page=${currentPage - 1}`}
                    className={`inline-flex px-3 py-1 rounded-full  ${currentPage === 1 ? 'opacity-40 pointer-events-none' : 'hover:underline'
                        }`}
                    style={{ backgroundColor: "#9900a020" }}
                >
                    <GrPrevious className='mt-1' style={{padding:"2px"}}/> Previous
                </Link>

                {/* Page Numbers */}
                {getPageArray().map((page, i) =>
                    typeof page === 'string' ? (
                        <span key={`ellipsis-${i}`} className="px-2">
                            ...
                        </span>
                    ) : (
                        <Link
                            key={page}
                            href={`${basePath}?page=${page}`}
                            className={`px-3 py-1 rounded-full text-large transition ${page === currentPage
                                ? 'pointer-events-none'
                                : 'text-main-text hover:bg-main-text hover:text-white'
                                }`}

                            style={{ backgroundColor: `${page === currentPage ? 'var(--main-text)' : ''}` }}
                        >
                            {page}
                        </Link>
                    )
                )}

                {/* Next */}
                <Link
                    href={`${basePath}?page=${currentPage + 1}`}
                    className={`inline-flex px-3 py-1 rounded-full ${currentPage === totalPages ? 'opacity-40 pointer-events-none' : 'hover:underline'
                        }`}
                    style={{ backgroundColor: "#9900a020" }}
                >
                    Next <GrNext className='mt-1' style={{padding:"2px"}} />
                </Link>
                <p className="px-3 py-1 mx-1 rounded-full text-xs">
                    Page {currentPage} of {totalPages}
                </p>
            </div>
        </div>
    )
}
