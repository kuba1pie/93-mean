/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/head'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/store'],
      vueTemplate: true,
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
    Pages({
      dirs: [{ dir: 'src/pages', baseRoute: '' }],
    }),
    UnoCSS({
      shortcuts: {
        error: 'bg-red-500/20',
        sending: 'bg-yellow-500/20',
        success: 'bg-green-500/20',
        def: 'bg-blue-500/20',
      },
    }),
  ],
  test: {
    environment: 'jsdom',
  },
})
