const PDFViewer = ({href}: {href: string}) => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
        <object
            data={href}
            type="application/pdf"
            width="100%"
            height="100%"
        >
            <p>Your browser does not support PDFs. 
            <a href={href}>Download the PDF</a> instead.
            </p>
        </object>
        </div>
    );
}

export default PDFViewer;