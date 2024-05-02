import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fiber',
  appName: 'Fiber',
  webDir: 'dist/fiber-front/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
