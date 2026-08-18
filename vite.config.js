import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    minify: false, // ANAコーディング規約でminifyしない方針
    // minify: 'esbuild', // デフォルトの高速なesbuildを使用
    // minify: 'terser', // Terserは実験用
    // terserOptions: {
    //   compress: false,   // ANAコーディング規約でminifyしない方針
    //   mangle: false,      // 変数名を短縮しない
    //   format: {
    //     comments: false,  // コメントは削除する
    //     beautify: true,
    //   },
    // },
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] || '';
          if (/\.css$/.test(name)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(name)) {
            return 'assets/img/[name]-[hash][extname]';
          }
          if (/\.(woff2?|ttf|eot)$/.test(name)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
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
