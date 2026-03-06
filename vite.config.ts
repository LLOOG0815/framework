import { fileURLToPath, URL } from 'node:url'

import { loadEnv } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { compression } from "vite-plugin-compression2"
import { VitePWA } from "vite-plugin-pwa"
import tailwindcss from "@tailwindcss/vite"
import cssnano from 'cssnano'
import postcssPresetEnv from 'postcss-preset-env'
import postcssPxToViewport from 'postcss-px-to-viewport-8-plugin'

// https://vite.dev/config/
export default defineConfig(({ mode }): import('vite').UserConfig => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      vueJsx(),
      tailwindcss(),
      vueDevTools(),
      compression({
        deleteOriginalAssets: false,
        threshold: 10240,
      }),
      VitePWA({
        registerType: "autoUpdate",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,gif,tff,woff,woff2}"],
          maximumFileSizeToCacheInBytes: 15 * 1024 * 1024,
          cleanupOutdatedCaches: true,
          skipWaiting: true,
          clientsClaim: true,
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      conditions: ['es2015', 'module', 'browser']
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia'],
      exclude: [],
      // 强制预构建
      force: false
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      // 代码压缩配置
      minify: 'terser',
      terserOptions: {
        compress: {
          unused: true, // 未使用代码
          dead_code: true, // 死代码
          drop_console: true, // 移除控制台日志
          drop_debugger: true // 移除调试器
        }
      },
      // CSS分割
      cssCodeSplit: true,
      // 测试环境按需要开放sourcemap，生产环境需要关闭
      sourcemap: false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/variables.scss" as *;`
        }
      },
      postcss: {
        plugins: [
          // 将现代 CSS 特性转换为浏览器兼容的代码
          postcssPresetEnv({
            autoprefixer: {
              flexbox: 'no-2009'
            },
            stage: 3
          }),
          // CSS 压缩
          cssnano({
            preset: 'default'
          }),
          // 将 px 转换为视口单位，根据项目需求选择性配置
          postcssPxToViewport({
            viewportWidth: 1920, // 设计稿宽度
            viewportHeight: 1080, // 设计稿高度
            unitPrecision: 5, // 单位精度
            viewportUnit: 'vw', // 转换后的单位
            selectorBlackList: [], // 不需要转换的选择器
            minPixelValue: 1, // 最小像素值
            mediaQuery: false // 是否在媒体查询中转换
          })
        ]
      }
    },
    server: {
      open: true,
      port: 8888,
      host: true,
      cors: true,
      hmr: {
        overlay: true
      },
      watch: {
        ignored: ['**/node_modules/**', '**/dist/**'],
        usePolling: false,
        interval: 100
      },
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
