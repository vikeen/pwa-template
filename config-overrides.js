/*
 * Rewire the create react app experience and customize exactly how we need it for the project.
 *
 * DOCS: https://github.com/timarney/react-app-rewired
 */

const path = require('path');

const FRONTEND_DIR = 'frontend';

module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function(config, env) {
        // ...add your webpack config
        return config;
    },
    // The Jest config to use when running your jest tests - note that the normal rewires do not
    // work here.
    jest: function(config) {
        // ...add your jest config customisation...
        config.roots = [ `<rootDir>/${FRONTEND_DIR}` ];
        config.collectCoverageFrom = [ `${FRONTEND_DIR}/**/*.{js,jsx,ts,tsx}`, `!${FRONTEND_DIR}/**/*.d.ts` ];
        config.testMatch = [
            `<rootDir>/${FRONTEND_DIR}/**/__tests__/**/*.{js,jsx,ts,tsx}`,
            `<rootDir>/${FRONTEND_DIR}/**/*.{spec,test}.{js,jsx,ts,tsx}`,
        ];
        return config;
    },
    paths: function(paths, env) {
        paths.appIndexJs = path.resolve(__dirname, `${FRONTEND_DIR}/index.tsx`);
        paths.appSrc = path.resolve(__dirname, `${FRONTEND_DIR}`);
        paths.testsSetup = path.resolve(__dirname, `${FRONTEND_DIR}/setupTests.ts`);
        paths.testsSetup = path.resolve(__dirname, `${FRONTEND_DIR}/setupProxy.ts`);
        paths.appTypeDeclarations = path.resolve(__dirname, `${FRONTEND_DIR}/react-app-env.d.ts`);
        return paths;
    },
};