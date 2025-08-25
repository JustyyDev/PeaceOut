import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/PeaceOut/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        homepage: 'homepage.html',
        auth: 'auth.html',
        upload: 'upload.html',
        profile: 'profile.html',
        'edit-profile': 'edit-profile.html',
        discover: 'discover.html',
        mainplaza: 'mainplaza.html',
        about: 'about-us.html',
        contact: 'contact.html',
        faq: 'faq.html',
        privacy: 'privacy.html',
        terms: 'terms.html',
        '404': '404.html',
        'deployment-status': 'deployment-status.html'
      }
    },
    copyPublicDir: false
  }
})