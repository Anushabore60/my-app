import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customcolor:"#F8F6F4",
        customcolor2:"#5D5D5D",
        customcolor3:"#F9F7F5",
        customgray:"#393939",
        customcolor4:"#9c9c9c",
        customcolor5:"#F1F4F6",
        buttoncolor:" #5CD2DD",
        customcolor6:"#FFF3F9",
     

        
      },
      fontFamily:{
        custom:["Playfair Display"],
        custom2:['geist' ,'sans-serif'],
        custom3:['Cabinet Grotesk']
      },
      lineHeight:{
        custom:"18.2"
      }
    },
  },
  plugins: [],
} satisfies Config;
