import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fiber',
  appName: 'fiber',
  webDir: 'dist/fiber-front',
  server: {
    androidScheme: 'https'
  }
};

export default config;
