import type { BookTabDef } from "../types";

export const researchTab: BookTabDef = {
    id: "research",
    label: "Research",
    spreads: [
        {
            left: (
                <div className="text-midnight py-4 px-2">
                    <h2>Research: Spread 1 (left)</h2>
                    <p>Placeholder content.</p>
                </div>
            ),
            right: (
                <div className="text-midnight py-4 px-2">
                    <h2>Research: Spread 1 (right)</h2>
                    <p>Placeholder content.</p>
                </div>
            ),
        },
        {
            left: (
                <div className="text-midnight py-4 px-2">
                    <h2>Research: Spread 2 (left)</h2>
                    <p>Placeholder content.</p>
                </div>
            ),
            right: (
                <div className="text-midnight py-4 px-2">
                    <h2>Research: Spread 2 (right)</h2>
                    <p>Placeholder content.</p>
                </div>
            ),
        },
    ],
};