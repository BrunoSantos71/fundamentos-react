import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { dependencies } from './package.json'

const DEFAULT_PORT: string | undefined = process?.env.PUBLIC_PORT;

export default defineConfig({
  server: {
    port: 3000,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: 'http://localhost:3000',
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'fundamentos',
          filename: "remoteEntry.js",
          exposes: {
            './Calculator': './src/calculadora/Calculator.tsx',
            './megaApp': './src/components/megaApp/megaApp.tsx',
          },
          shared: {
            ...dependencies,
            react: {
              singleton: true, eager: true, requiredVersion: dependencies.react
            }
          }
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});