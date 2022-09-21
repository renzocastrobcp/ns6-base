# Nativescript 6 - Demo

Main packages:

- tns-ios: 6.5.3
- @angular/core: ~8.2.0,
- @nativescript/angular: ^8.21.0
- @nativescript/core: ~6.5.15
- typescript": ~3.5.3


## Quick Usage

Prerequisites:

- Java JDK 1.8
- NodeJS 10+
- NPM 6.14
- XCode 13.2.1

```bash
npm i nativescript@6.8 -g
```

```bash
npm run clean
tns run ios --env.aot
```

## Issue:

@nativescript/angular v8.21.0 + JScrambler on device iPhone 6 (iOS 12.5.5). Load the splash few seconds and after app crashed.

See note in [src/app/navigation/app.navigation.ts](src/app/navigation/app.navigation.ts)
