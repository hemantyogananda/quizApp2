// /* eslint-env node */
import { ExpoConfig } from '@expo/config-types';
import { coerce } from 'semver';
import pkg from './package.json';

const currentVersion = coerce(pkg.version);
const androidVersion = currentVersion.major * 10000 + currentVersion.minor * 100 + currentVersion.patch;
const expoVersion = pkg.version;

const config: ExpoConfig = {

  name: 'quizapp',
  slug: 'quizapp',
  updates: {
    url: "https://u.expo.dev/8ea15a44-06e8-41d0-bab5-a950598ff1a1"
  },
  runtimeVersion: {
    policy: "appVersion"
  },
  extra: {
    dbName: 'test',
    eas: {
        projectId: "8ea15a44-06e8-41d0-bab5-a950598ff1a1"
    },
  },
  android: {
      package: 'com.amarjanica.quizapp',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      versionCode: androidVersion,
    },
};

export default config;