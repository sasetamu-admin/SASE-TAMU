import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        source: ["Source Sans Pro", ...fontFamily.sans],
      },
      colors: {
        maroon: "#500000",
        maroonDark: "#3c001c",
        maroonLight: "#732f2f",
        sakura: "#FFB7C5",
        lantern: "#FF8C42",
        paper: "#F5F0E8",
        midnight: "#0D0D0D",
        // sase colors
        navy: "#141B4D",
        nationalblue: "#89ABE4",
        sandybrown: "#DBC8B6",
        stoneGray: "#D0D0CE",
        khakiBrown: "#ACA39A",
        charcoalGray: "#3F4444",
        ink: "#101820",
        


      },
      backgroundImage: {
        informational: "url('/footer/index_bg.jpg')",
        informational_mobile: "url('/footer/index_bg_mobile.JPG')",
        meow: "url('/footer/meow.jpg')",
        officer: "url('/footer/officer.jpg')",
        officer_mobile: "url('/footer/officer_mobile.jpg')",
        sponsor: "url('/footer/sponsor.jpg')",
        cuties: "url('/footer/cutiess.jpg')",
        karaoke: "url('/footer/karaoke.jpg')",
        big: "url('/footer/big.jpg')",
        sweet: "url('/footer/sweet.jpg')",
        elevator: "url('/footer/elevator.jpg')",
        squad: "url('/footer/squag_bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
