import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/legal/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // 외부 IP나 도메인으로 접속할 수 있게
    port: 3000,
    allowedHosts: ['website.makeeasy.pe.kr'],  // 이 호스트로 접속 허용
  }
})
