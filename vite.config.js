import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    // minify: 'esbuild', // デフォルトの高速なesbuildを使用
    minify: false, // コーディング規約でやらない方針
  },
  plugins: [
    tailwindcss(),
    ViteEjsPlugin({
      // EJSテンプレートに渡すデータオブジェクト (グローバル変数)
      title: "モダンLP開発環境 | Vite + EJS + Tailwind CSS + Alpine.js",
    }),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logOnEmpty: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupIds: false,
                removeViewBox: false,
              },
            },
          },
        ],
      },
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: false,
        quality: 80,
      },
      avif: {
        lossless: false,
        quality: 70,
      },
    }),
  ],
});
