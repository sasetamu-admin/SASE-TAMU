import PDFViewer from "~/components/PDFViewer";

const OpenPages = () => {
    return <>
        <div className="bg-linear-to-l from-neutral-3 to-neutral-4 to-20% h-full w-1/2">
            <div className="h-full">
                <PDFViewer href={"/documents/SASE-Example.pdf"} />
            </div>
        </div>
        <div className="bg-neutral-2/30 h-full w-px"></div>
        <div className="bg-linear-to-r from-neutral-3 to-neutral-4 to-20% h-full w-1/2">
            <div className="text-midnight py-4 px-2">
                <h2>Example Resume</h2>
                <p>lorem ipsum...</p>
            </div>
        </div>
    </>
}

export default OpenPages;