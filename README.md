# Namaste React Series

This is Namaste React repository.
In this repo I'll have all the basics, projects and advanced topics in react.js

# Parcel

- It creates a dev build for us
- It creates a localserver and hosts the application
- It refreshes the page automatically - Hot Module Replacement (HMR)->As Soon as we save it is creating build again and refreshes the page automatically.
- It does HMR using File Watching Algorithm - written in C++
- Faster builds - Beacuse of Caching. First time build takes some time later on the buikd time is reducing beacuse of Caching(All these cached files will be inside the .parcel-cache folder).
- Image Optimization
- Minification -- If I create Prod build it will Minify, bundle, compress the files
- Bundling
- Compressing
- Code Splitting
- Consistent Hashing
- Differential Bundling - When the app is hosted it can be opened in different browsers and different versions of each browser. This is done using Differential Bundling. Parcel creates differential Bundling for different browsers.
- Diagnostic - diagnoise the errors from where the error is coming
- Error Handling - gives better error suggestions
- Tree Shaking --> removes unused code for us.
- HTTPS
- Different dev and prod bundles
- For knowing more about parcel go to https://parceljs.org/
