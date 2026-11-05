import { MouseEventHandler, ReactNode } from "react";
import { cn } from "../../../utils/cn";

const BookTab = ({
    onClick,
    children,
    active = false,
    transitionDelayInMs = 600,
    }: { onClick: MouseEventHandler; children: ReactNode; active: boolean; transitionDelayInMs?: number }) => {

    return (
        <button
        type="button"
        role="tab"
        aria-selected={active}
        onClick={onClick}
        className={cn(
            "whitespace-nowrap overflow-hidden rounded-r-sm cursor-pointer",
            active
            ? "border-blue-0"
            : "border-blue-1 hover:border-blue-0",
        )}
        style={{
            transition: "border-color, transform",
            transitionDuration: `${transitionDelayInMs}ms`,
        }}
        >
        <span
            className={cn("block px-0.5 py-2", active ? "bg-blue-0" : "bg-blue-1 hover:bg-blue-0")}
            style={{
            transition: "background-color",
            transitionDuration: `${transitionDelayInMs}ms`,
            }}
        >
            <span className="text-sm font-medium [writing-mode:vertical-rl] max-h-[16ch]">{children}</span>
        </span>
        </button>
    );
};

export default BookTab;