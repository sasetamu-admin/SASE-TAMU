# SASE TAMU

This is the repository for [SASE TAMU'S Website!](https://sasetamu.org/)

## Updating Officer Information

Officer information is located in the `src/constants/OfficerList.ts` file path. The website pages are setup to obtain data through the `EboardOfficers`, `GeneralOfficers`, and `Advisors` JSON objects. To update an existing role, simply replace any existing data within any of those three objects and save the changes. To add new data, such as new officer roles or object properties, the associated types must be updated as well.

For example, to add a new role "Mascot" as a "General Officer" position, a relevant key such as `mascot` should be added to `GeneralOfficerRoles`. Finally, add the new `mascot` property to `GeneralOfficers` with it's appropriate child properties. Note that ALL file paths should begin with "/" and assume the full file path from the root of the project.

## Updating Sponsors

Sponsor information is located in the `src/constants/SponsorLists.ts` file path. The website pages are setup to obtain data through the `logosPlatinum`, `logosGold`, `logosSilver`, and `logosBronze` JSON Object arrays. To add, delete, or change sponsors, simply update the existing array with accordance to the following format:

```ts
export const logos______ = [
  {
    ...
  },
  {
    link: "<Company's Website Link>",
    alt: "<Company Name>",
    path: "/sponsors/<Company Logo SVG/WEBP>",
  },

  // Add more logo paths as needed
];
```

Note that the company's logo should ideally be saved in either SVG or WEBP (PNG as worst case). This is because these two file formats typically resize better than a traditional image format (PNG, JPG, JPEG, etc).

## Credits and Contacts

This website has been made by the efforts of:

- Victoria Chen | President 2023-2024 | @victoriaemily
- Art Young | Treasurer 2024-2025 | @Atsubyo
- Luis Albos | Historian 2024-2025 | @Luis-Albos
- Vijayadatta Seetharam | Design Intern 2024-2025 | @MikamiV
- Nick Truong | Secretary 2025-2026 | @nicktnc24

If there are any issues regarding the website, please first reach out to __**NICK TRUONG**__ via email [nicktnc24@gmail.com](mailto:nicktnc24@gmail.com).

## Project Configurations

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
