// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// Enable pnpm symlinks
config.resolver.unstable_enableSymlinks = true;

// Metro config issue, resolve `metro-runtime` path relative from `react-native`
config.transformer.asyncRequireModulePath = require.resolve(
  'metro-runtime/src/modules/asyncRequire',
  { paths: [require.resolve('react-native/package.json')] },
);

module.exports = config;
