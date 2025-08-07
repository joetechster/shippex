
# Shipment Tracker App

A React Native application written in TypeScript, designed for drivers to manage their shipment status. This app includes a splash screen with animation, a login screen with validation, and a list of shipments with their respective statuses.

## Demo
<a href="https://drive.google.com/file/d/1NnkcHUr5VDsCWZ6i-o2xsqn3IL1qEa6p/view?usp=sharing">Watch demo<a/>

## Features

-   Splash screen with animation
-   Login screen with validation and animation
-   Shipment list displaying statuses (Received, Canceled, etc.)
-   Pull-to-refresh functionality for the shipment list
-   Smooth navigation with transition animations
-   [Optional] Search or filtering for shipments

## Installation

1.  Clone the repository:
    
    ```bash
    git clone https://github.com/joetechster/shippex.git
    
    ```
    
2.  Navigate to the project directory:
    
    ```bash
    cd shippex
    
    ```
    
3.  Install dependencies:
    
    ```bash
    npm install
    
    ```
    
    or
    
    ```bash
    yarn install
    
    ```
    
4.  For iOS, install CocoaPods dependencies:
    
    ```bash
    cd ios
    pod install
    cd ..
    
    ```
    

## Running the App

### Android

1.  Start Metro:
    
    ```bash
    npm start
    
    ```
    
    or
    
    ```bash
    yarn start
    
    ```
    
2.  In another terminal, run:
    
    ```bash
    npm run android
    
    ```
    
    or
    
    ```bash
    yarn android
    
    ```
    

### iOS

1.  Start Metro:
    
    ```bash
    npm start
    
    ```
    
    or
    
    ```bash
    yarn start
    
    ```
    
2.  In another terminal, run:
    
    ```bash
    npm run ios
    
    ```
    
    or
    
    ```bash
    yarn ios
    
    ```
    

## Building the APK

To build the APK for Android, follow these steps:

1.  Navigate to the  `android`  directory:
    
    ```bash
    cd android
    
    ```
    
2.  Run the following command to build the release APK:
    
    ```bash
    ./gradlew assembleRelease
    
    ```
    
3.  The APK will be located at  `android/app/build/outputs/apk/release/app-release.apk`
    

## Usage

-   Upon launching the app, you will see the splash screen with animation.
-   After the splash screen, you will be directed to the login screen. Enter your credentials to log in.
-   Once logged in, you will see the shipment list screen, where you can view the list of shipments and their statuses.
-   You can pull down to refresh the shipment list.
-   Use the search or filter functionality to find specific shipments.

## Project Structure

The project follows a standard React Native structure, which may include:

Directory/File

Description

`src/`

Contains the source code, including navigation, screens, and components

`android/`

Android-specific code and configuration

`ios/`

iOS-specific code and configuration

`App.tsx`

Entry point of the application, setting up navigation

## Additional Notes

-   The app is built using modern React Native features and TypeScript for type safety and maintainability.
-   The UI design is likely based on a Figma file, ensuring a polished and consistent user experience.
-   For further details on React Native setup or troubleshooting, refer to the  [React Native Documentation](https://reactnative.dev/docs/getting-started).
