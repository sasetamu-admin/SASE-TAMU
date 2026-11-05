import type { ReactNode } from "react";

export type Spread = { left: ReactNode; right: ReactNode };

export type BookTabDef = {
    id: string;
    label: string;
    spreads: Spread[]; // must contain at least one spread
};