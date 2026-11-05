import type { BookTabDef } from "./types";
import { resumeTab } from "./tabs/resume";
import { researchTab } from "./tabs/research";
import { aiMlTab } from "./tabs/aiml";
import { cadTab } from "./tabs/cad";
import { otherTab } from "./tabs/other";

// Display order of the tabs on the book.
export const tabs: BookTabDef[] = [resumeTab, researchTab, aiMlTab, cadTab, otherTab];