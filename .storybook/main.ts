import type { StorybookConfig } from '@storybook/nextjs-vite';
import path from 'path';
import { existsSync, readFileSync } from 'fs';
import type { Plugin } from 'vite';

/**
 * Vite plugin that rewrites @/components/{ui,forms,blocks}/* imports inside
 * theme files to point to the theme's own components.
 *
 * Uses the `load` hook to intercept file content BEFORE SWC/esbuild
 * resolves the @/ alias, rewriting them to relative paths that point
 * to the theme's own components directory.
 */
function themeComponentResolver(): Plugin {
  const themesDir = path.resolve(process.cwd(), 'themes');
  const componentSubdirs = ['ui', 'forms', 'blocks'] as const;

  return {
    name: 'theme-component-resolver',
    enforce: 'pre',
    load(id) {
      const cleanId = id.split('?')[0];

      if (!/\.[jt]sx?$/.test(cleanId)) return null;

      const importerRelative = path.relative(themesDir, cleanId);
      if (importerRelative.startsWith('..')) return null;

      let code: string;
      try {
        code = readFileSync(cleanId, 'utf-8');
      } catch {
        return null;
      }

      const hasRelevantImport = componentSubdirs.some(
        (dir) => code.includes(`@/components/${dir}/`)
      );
      if (!hasRelevantImport) return null;

      const themeName = importerRelative.split(path.sep)[0];
      const importerDir = path.dirname(cleanId);

      let transformed = code;
      for (const subdir of componentSubdirs) {
        const themeComponentsDir = path.resolve(themesDir, themeName, 'components', subdir);
        let relativePath = path.relative(importerDir, themeComponentsDir).replace(/\\/g, '/');
        if (!relativePath.startsWith('.')) {
          relativePath = './' + relativePath;
        }

        transformed = transformed.replace(
          new RegExp(`(from\\s+["'])@/components/${subdir}/([^"']+)(["'])`, 'g'),
          (match, prefix, componentName, suffix) => {
            for (const ext of ['.tsx', '.ts']) {
              if (existsSync(path.resolve(themeComponentsDir, componentName + ext))) {
                return `${prefix}${relativePath}/${componentName}${suffix}`;
              }
            }
            return match;
          }
        );
      }

      if (transformed !== code) {
        return transformed;
      }
      return null;
    },
  };
}

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../themes/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-themes"],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(themeComponentResolver());
    return config;
  },
};

export default config;
