/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),

    vueJsx(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      resolvers: [
        NaiveUiResolver(),
      ],
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      presets: [
        // @ts-expect-error icon
        presetAttributify(),
        // @ts-expect-error icon
        presetIcons(),
      ],
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
