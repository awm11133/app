import React, { createContext, useContext } from 'react';
import type {children} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const AuthContext = createContext({ });

export const AuthProvider : () => children = () => {
    const signInWithGoogle = async () => {
                Google.logInAsync(config).then(async (logInResult) => {
                    if(logInResult.type === 'success') {
        
                    }
                });
            };

        return (
        
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Button
      title='Sign in with Google'
      onPress={signInWithGoogleAsync}
      />
      </View>
 
            //   <AuthContext.Provider 
            //   value={{
            //     user: null,
            //     signInWithGoogle,
            //     }}
            //     >
            //         {children}
            //         </AuthContext.Provider>
                );
            };
  GoogleSignin.configure({
    webClientId: '812907708251-km31lktdajs62737hudtf3bkm898fklj.apps.googleusercontent.com',
  });

  const signInWithGoogleAsync = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in.then((user)=>{
      console.log(user);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
//   return (
//    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//     <Button
//       title='Sign in with Google'
//       onPress={signInWithGoogleAsync}
//       />
//       </View>
//   );



export default function useAuth(){
        return useContext(AuthContext);
    };







// import React, { createContext, useContext } from 'react';
// import * as Google from "expo-google-app-auth";


// const AuthContext = createContext({ });

// const config = {
//     androidClientId:
//     '716225223792-0s08dcn0vc3fk0mjhqbkfei8jhhd01e4.apps.googleusercontent.com',
//     iosClientId:'716225223792-6sq9pm5k6bek1ka8qsk4lumoka9i501f.apps.googleusercontent.com',
//     webClientId:'716225223792-m2tia67egjjs7otqfani6u8lvpau3sug.apps.googleusercontent.com',
//     scopes: ["profile", "email"],
//     Permissions: ["public_profile", "email", "gender", "location"],
// };
// export const AuthProvider = ({ children}) => {
//     const signInWithGoogle = async () => {
//         Google.logInAsync(config).then(async (logInResult) => {
//             if(logInResult.type === 'success') {

//             }
//         });
//     };

//   return (
//   <AuthContext.Provider 
//   value={{
//     user: null,
//     signInWithGoogle,
//     }}
//     >
//         {children}
//         </AuthContext.Provider>
//     );
// };

// export default function useAuth() {
//     return useContext(AuthContext);
// }