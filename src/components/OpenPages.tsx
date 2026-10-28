import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();



const OpenPages = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div>
        <ErrorBoundary fallback={<p>Failed to load PDF.</p>}>
            <Suspense fallback={<p>Loading document…</p>}>
            <Document file="/documents/SASE-Example.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Suspense fallback={<p>Loading page…</p>}>
                <Page pageNumber={pageNumber} />
                </Suspense>
            </Document>
            </Suspense>
        </ErrorBoundary>
        <p>
            Page {pageNumber} of {numPages}
        </p>
        </div>
    );
    return <>
        <div className="bg-linear-to-l from-neutral-3 to-neutral-4 to-20% h-full w-1/2"></div>
        <div className="bg-neutral-2/30 h-full w-px"></div>
        <div className="bg-linear-to-r from-neutral-3 to-neutral-4 to-20% h-full w-1/2"></div>
    </>
}

export default OpenPages;