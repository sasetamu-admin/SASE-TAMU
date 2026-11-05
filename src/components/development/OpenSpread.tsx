import { ReactNode } from "react";
import PDFViewer from "~/components/PDFViewer";

const OpenSpread = ({left, right}: {left: ReactNode, right: ReactNode}) => {
    return <>
        <div className="bg-linear-to-l from-neutral-3 to-neutral-4 to-20% h-full w-1/2">
            <div className="h-full">
                {left}
            </div>
        </div>
        <div className="bg-neutral-2/30 h-full w-px"></div>
        <div className="bg-linear-to-r from-neutral-3 to-neutral-4 to-20% h-full w-1/2">
            {right}
        </div>
    </>
}

export default OpenSpread;