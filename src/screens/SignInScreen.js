import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SignInScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign in for tracker"
        errorMessage={state.errorMessage}
        submitBtnText="Sign in"
        onSubmit={signin}
      />
      <NavLink
        text="Dont have an account? Sign up instead!"
        routeName="Signup"
      />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 250,
    flex: 1,
    justifyContent: "center"
  }
});

export default SignInScreen;
