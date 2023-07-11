import React, { useContext, useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import { AuthContext } from "./AuthContext";

const SignUp = ({ navigation }) => {
  const { register } = useContext(AuthContext);
  const [mobile, setMobile] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [role, setRole] = useState("Dealer");
  const [email, setEmail] = useState(null);

  const handleRegister = () => {
    // Perform validation checks for mandatory fields
    if (!name || !mobile || !email || !role || !password) {
      alert('Please fill in all the mandatory fields.');
      return;
    }
    // console.log('Name',name, 'Mobile',mobile, 'Email',email, 'Role',role, 'Password',password);
    // then Call the register function to register
    register(name, email, password, mobile, role);
  };
  return (
    <ScrollView>
      <View style={styles.body}>
        {/* <Headerr leftIcon={require("../assets/menu.png")} Search={require("../assets/lens.png")} /> */}
        <View>
          <View style={styles.image}>
            <Image source={require("../assets/logo.png")} style={styles.imageSize} />
          </View>

          <View style={styles.SignUpTitle}>
            <Text style={styles.SignUpText}>Sign Up</Text>
          </View>

          {/* name */}
          <TextInput
            style={styles.NameInputbotton}
            autoCapitalize
            autoCorrect={false}
            placeholder="Name"
            onChangeText={setName}
          />

          {/* Mobile No */}
          <TextInput
            style={styles.MobileNoInputbotton}
            autoCapitalize
            autoCorrect={false}
            placeholder="Mobile No."
            onChangeText={setMobile}
          />

          {/* Email Id */}
          <TextInput
            style={styles.EmailIdInputbotton}
            autoCapitalize
            autoCorrect={false}
            placeholder="Email Id"
            onChangeText={setEmail}
          />

          {/* role */}
          {/* <TextInput
            style={styles.NameInputbotton}
            autoCapitalize
            autoCorrect={false}
            placeholder="Role"
            onChangeText={setRole}
          /> */}

          {/* password*/}
          <TextInput
            style={styles.PasswordInputbotton}
            autoCapitalize
            autoCorrect={false}
            placeholder="Password"
            // value={password}
            secureTextEntry
          />

          {/* Confirm Password*/}
          <TextInput
            style={styles.ConfirmPasswordInputbotton}
            autoCapitalize
            autoCorrect={false}
            placeholder="Confirm password"
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity onPress={handleRegister}>
            <View style={styles.SignUpButton}>
              <Text style={styles.SignUpButtonText}>SIGN UP</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity>
            <Text style={styles.ForgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={styles.line}></View>

          <View style={styles.ExistingCustomer}>
            <Text style={styles.ExistingCustomerText}>Are you Existing customer Click </Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={styles.ExistingCustomerHereText}> here </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  // body: {
  //     backgroundColor: "white",
  // },

  image: {
    alignSelf: 'center',
    margintop: 0,
  },

  imageSize: {

    width: 200,
    height: 300,
    resizeMode: "cover",
  },

  SignUpTitle: {
    marginTop: -15,
    fontSize: 18,
    alignSelf: 'center'
  },

  SignUpText: {
    fontSize: 23,
    marginTop: -30,
    textAlign: "center",
    color: "black",
  },

  // Input Buttons CSS

  //  Name Input Buttons
  NameInputbotton: {
    borderWidth: 1,
    color: "#7d7d7d",
    marginTop: 5,
    marginBottom: 5,
    lineHeight: 25,
    fontSize: 13,
    width: "80%",
    marginTop: 20,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "#bc9954",
    borderWidth: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },

  //  Mobile No Input Buttons
  MobileNoInputbotton: {
    borderWidth: 1,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontSize: 13,
    width: "80%",
    marginTop: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#bc9954",
    borderWidth: 0,
    alignSelf: 'center',
    paddingBottom: 0,
    paddingLeft: 0,
  },

  //  Email Id Input Buttons
  EmailIdInputbotton: {
    borderWidth: 1,
    color: "#7d7d7d",
    marginBottom: 5,
    lineHeight: 25,
    fontSize: 13,
    marginTop: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#bc9954",
    width: '80%',
    borderWidth: 0,
    alignSelf: 'center',
    paddingBottom: 0,
    paddingLeft: 0,
  },

  //  Password Input Buttons
  PasswordInputbotton: {
    borderWidth: 1,
    color: "#7d7d7d",
    marginBottom: 5,
    lineHeight: 25,
    fontSize: 13,
    width: "80%",
    alignSelf: 'center',
    marginTop: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#bc9954",
    borderWidth: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  //  Confirm password Input Buttons
  ConfirmPasswordInputbotton: {
    borderWidth: 1,
    color: "#7d7d7d",
    marginBottom: 5,
    lineHeight: 25,
    fontSize: 13,
    width: '80%',
    marginTop: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#bc9954",
    borderWidth: 0,
    alignSelf: 'center',
    paddingBottom: 0,
    paddingLeft: 0,
  },

  SignUpButton: {
    backgroundColor: "#eec06b",
    padding: 15,
    marginTop: 30,
    alignItems: "center",
    borderRadius: 80,
    width: 240,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center'
  },

  SignUpButtonText: {
    fontSize: 20,
    color: "black",
  },

  ForgotPasswordText: {
    fontSize: 14,
    color: "#a4a4a4",
    marginBottom: 25,
    textAlign: "center",
    marginTop: 20,
  },

  line: {
    width: "80%",
    height: 1,
    backgroundColor: "#a4a4a4",
    margin: 0,
    alignSelf: 'center'
  },

  ExistingCustomer: {
    flexDirection: "row",
    justifyContent: "center"
  },

  ExistingCustomerText: {
    textAlign: "center",
    paddingTop: 6,
    fontWeight: 'bold',
  },

  ExistingCustomerHereText: {
    textAlign: "center",
    paddingTop: 6,
    textDecorationLine: 'underline',
    fontWeight: 'bold',

  }
});
