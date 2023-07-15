import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Gold', value: '1' },
  { label: 'Silver', value: '2' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.Dropdowncontainer}>
        <View style={{ backgroundColor: "#fff", borderRadius: 15, backgroundColor: "black", color: "#eec06b" }}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: '#eec06b' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            // search
            maxHeight={500}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Gold' : '...'}
            // searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eec06b',
  },
  Dropdowncontainer: {
    flex: 0.1,
    // backgroundColor: '#eec06b',
    padding: 16,
    justifyContent: "center",
    alignContent: "center"
  },

  dropdown: {
    height: 50,
    borderColor: '#eec06b',
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 15,
    // marginTop: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    // backgroundColor: 'red',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#eec06b",
    fontSize: 20,
  },
  selectedTextStyle: {
    fontSize: 20,
    color: "#eec06b",
  },
  iconStyle: {
    width: 40,
    height: 40,
    color: "#eec06b"

  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});