import PDFViewer from "~/components/PDFViewer";
import type { BookTabDef } from "../types";

export const resumeTab: BookTabDef = {
    id: "resume",
    label: "Resume",
    spreads: [
        {
            left: <PDFViewer href={"/documents/SASE-Example.pdf"} />,
            right: (
                <div className="text-midnight py-4 px-2">
                    <h2>Example Resume</h2>
                    <p>lorem ipsum...</p>
                </div>
            ),
        },
        {
            left: (
                <div className="text-midnight py-4 px-2">
                    <h2>Resume: Page 2 (left)</h2>
                    <p>Placeholder content.</p>
                </div>
            ),
            right: (
                <div className="text-midnight py-4 px-2">
                    <h2>Resume: Page 2 (right)</h2>
                    <p>Placeholder content.</p>
                </div>
            ),
        },
    ],
};