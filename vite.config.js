import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Advanced-Javascript-Exam-1/', // match your exact GitHub repo name
})