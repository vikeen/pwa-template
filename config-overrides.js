/*
 * Rewire the create react app experience and customize exactly how we need it for the project.
 *
 * DOCS: https://github.com/timarney/react-app-rewired
 */

const path = require('path');

const FRONTEND_DIR = 'frontend';

module.exports = {
    // The paths config to use when compiling your react app for development or production.
    paths: function(paths, env) {
        paths.appIndexJs = path.resolve(__dirname, `${FRONTEND_DIR}/index.tsx`);
        paths.appSrc = path.resolve(__dirname, `${FRONTEND_DIR}`);
        paths.testsSetup = path.resolve(__dirname, `${FRONTEND_DIR}/setupTests.ts`);
        paths.testsSetup = path.resolve(__dirname, `${FRONTEND_DIR}/setupProxy.ts`);
        paths.appTypeDeclarations = path.resolve(__dirname, `${FRONTEND_DIR}/react-app-env.d.ts`);
        return paths;
    },
};