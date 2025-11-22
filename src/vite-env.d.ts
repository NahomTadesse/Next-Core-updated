/// <reference types="vite/client" />
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 232 45% 15%;   /* hsl for #1a237e – deep navy */
    --foreground: 232 20% 95%;   /* light text */
    --border: 232 30% 25%;
    --input: 232 30% 25%;
    --ring: 232 80% 55%;         /* indigo ring */
    --radius: 0.5rem;
    --primary: 232 45% 55%;
    --primary-foreground: 0 0% 98%;
  }

  .dark {
    --background: 232 45% 10%;   /* Slightly darker for dark mode */
    --foreground: 232 20% 95%;
  }
}