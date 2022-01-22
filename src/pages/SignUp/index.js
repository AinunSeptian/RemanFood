import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header title="Sign Up" subTitle="Register and eat" onBack={() => {}} />
        <View style={styles.container}>
          <View style={styles.photo}>
            <View style={styles.borderPhoto}>
              <View style={styles.photoContainer}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            </View>
          </View>
          <TextInput label="Full Name" placeholder="Type your full name" />
          <Gap height={16} />
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
          />
          <Gap height={16} />
          <TextInput label="Password" placeholder="Type your password" />
          <Gap height={24} />
          <Button
            text="Continue"
            onPress={() => navigation.navigate('SignUpAddress')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  photo: {alignItems: 'center', marginVertical: 16},
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8d92a3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#f0f0f0',
    padding: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
    textAlign: 'center',
  },
});
