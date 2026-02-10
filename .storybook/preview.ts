import type { Preview } from '@storybook/nextjs-vite';
import { withThemeByDataAttribute } from "@storybook/addon-themes";

// Importar el globals.css de cada tema directamente
import "../themes/minimal/globals.css";
import "../themes/brutalism/globals.css";
import "../themes/corporate/globals.css";
import "../themes/neotech/globals.css";


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    // 1. AUTO-TEMA: Lee el parámetro `theme` de cada story y aplica data-theme en BODY
    (Story, context) => {
      const theme = context.parameters.theme || 'minimal';
      document.body.setAttribute('data-theme', theme);
      return Story();
    },

    // 2. SELECTOR DE MODO (Light / Dark)
    withThemeByDataAttribute({
      themes: {
        Light: "light",
        Dark: "dark",
      },
      defaultTheme: "Light",
      attributeName: "class",
    }),
  ],
};

export default preview;
