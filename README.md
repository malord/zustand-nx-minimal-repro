This is a minimal reproduction of an issue I'm having importing zustand in to an nx monorepo with React Native 0.72.3.

## Steps to reproduce

1. Clone this repo
2. `npm install`
3. `nx run-ios zustand4ever` (or `run-android`)
4. The metro bundler will eventually report `'import.meta' is currently unsupported`

## How the repo was created

```sh
npx create-nx-workspace zustand4ever
# (choose none -> integrated)
cd zustand4ever
npm i --save-dev @nx/react-native
npm i --save-dev @nx/react-native
npx nx g @nx/react-native:application --displayName zustand4ever
echo Pods/ >> apps/zustand4ever/ios/.gitignore
```
