# How to Add Future Past Officers

This guide explains how to add new past officer years to the SASE TAMU website.

## Steps

1. **Create Officer List Constants**
   - In the appropriate constants file (e.g., `src/constants/PastOfficerList25-26.ts`), create new constants for the executive board and general officers:
   ```ts
   export const PastEBoardOfficers2526 = { /* ...officer data... */ };
   export const PastGeneralOfficers2526 = { /* ...officer data... */ };
   ```

2. **Import the New Constants**
   - In `pages/our-team.tsx`, import your new officer lists:
   ```ts
   import { PastEBoardOfficers2526, PastGeneralOfficers2526 } from "~/constants/PastOfficerList25-26";
   ```

3. **Add to `pastOfficerYears` Array**
   - Add a new object to the `pastOfficerYears` array in `pages/our-team.tsx`:
   ```ts
   {
     year: "2025-26",
     displayName: "2025-26 Officers",
     eboard: PastEBoardOfficers2526,
     general: PastGeneralOfficers2526,
   }
   ```
   - Place the newest year at the top of the array for correct display order.

## Example
```ts
const pastOfficerYears: PastOfficerYear[] = [
  {
    year: "2025-26",
    displayName: "2025-26 Officers",
    eboard: PastEBoardOfficers2526,
    general: PastGeneralOfficers2526,
  },
  // ...other years
];
```

## Notes
- Ensure officer data matches the expected format for executive and general officers.
- Update imports and constants as needed for each new year.

---
For further questions, contact the website maintainers or refer to the code comments in `our-team.tsx`.
