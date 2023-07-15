// import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
// import React, { useState } from 'react'

// const DropDown2 = ({ navigation }) => {

//   const [selectCoins, setSelectedCoins] = useState("Select Coins")
//   const [isClicked, setIsClicked] = useState(false)
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>COINS</Text>
//       <TouchableOpacity style={styles.dropDownSelector} onPress={() => { setIsClicked(!isClicked) }}>
//         <Text>{selectCoins}</Text>
//         {isClicked ? (
//           <Image source={require("../assets/drop-up.png")} style={{ width: 20, height: 20 }} />
//         ) : (<Image source={require("../assets/drop-down.png")} style={{ width: 20, height: 20 }} />)}
//       </TouchableOpacity>


//       {isClicked ? (
//         <View style={styles.dropDownArea}>
//           <TouchableOpacity style={styles.GoldcoinsItem} onPress={() => navigation.navigate('goldscreen')}>
//             <Text style={styles.Goldtext}>Gold</Text>
//           </TouchableOpacity>

//           <View style={styles.line}></View>

//           <TouchableOpacity style={styles.SilvercoinsItem} onPress={() => navigation.navigate('silverscreen')}>
//             <Text style={styles.Silvertext}>Silver</Text>
//           </TouchableOpacity>
//         </View>) : null}

//     </View>
//   )
// }

// export default DropDown2

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#eec06b"
//   },
//   heading: {
//     fontSize: 40,
//     fontWeight: "800",
//     marginTop: 100,
//     alignSelf: "center",
//     color: "black"
//   },
//   dropDownSelector: {
//     width: "90%",
//     height: 50,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: "black",
//     alignSelf: "center",
//     marginTop: 50,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingLeft: 15,
//     paddingRight: 15,
//     backgroundColor: "white",
//   },
//   dropDownArea: {
//     width: "90%",
//     height: 100,
//     borderRadius: 5,
//     marginTop: 20,
//     backgroundColor: "#fff",
//     elevation: 5,
//     alignSelf: "center",
//     borderWidth: 2,
//     borderColor: "black",
//   },
//   search: {
//     width: "90%",
//     height: 50,
//     borderRadius: 10,
//     borderWidth: 0.5,
//     borderColor: "black",
//     alignSelf: "center",
//     marginTop: 20,
//     paddingLeft: 15,
//   },
//   coinsItem: {
//     width: "85%",
//     height: 50,
//     borderBottomWidth: 0.2,
//     borderBottomColor: "#8e8e8e",
//     alignSelf: "center",
//     justifyContent: "center"
//   },
//   line: {
//     width: "100%",
//     height: 2,
//     backgroundColor: "black",
//     alignSelf: 'center'
//   },
//   Goldtext: {
//     fontSize: 25,
//     color: "black",
//     fontWeight: "600",
//     // textAlign: "center",
//   },
//   Silvertext: {
//     fontSize: 25,
//     color: "black",
//     fontWeight: "600",
//     // textAlign: "center"
//   },
//   GoldcoinsItem: {
//     width: "85%",
//     height: 50,
//     // borderBottomWidth: 0.2,
//     // borderBottomColor: "#8e8e8e",
//     alignSelf: "center",
//     justifyContent: "center"
//   },
//   SilvercoinsItem: {
//     width: "85%",
//     height: 50,
//     // borderBottomWidth: 0.2,
//     // borderBottomColor: "#8e8e8e",
//     alignSelf: "center",
//     justifyContent: "center"
//   }
// })


import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { DataTable } from 'react-native-paper';

const DropDown2 = ({ navigation }) => {

  const [selectCoins, setSelectedCoins] = useState("Select Coins")
  const [isClicked, setIsClicked] = useState(false)
  return (
    <View style={styles.dropcontainer}>
      <Text style={styles.heading}>COINS</Text>
      <TouchableOpacity style={styles.dropDownSelector} onPress={() => { setIsClicked(!isClicked) }}>
        <Text>{selectCoins}</Text>
        {isClicked ? (
          <Image source={require("../assets/drop-up.png")} style={{ width: 20, height: 20 }} />
        ) : (<Image source={require("../assets/drop-down.png")} style={{ width: 20, height: 20 }} />)}
      </TouchableOpacity>


      {isClicked ? (
        <View style={styles.dropDownArea}>
          <TouchableOpacity style={styles.GoldcoinsItem} onPress={() => navigation.navigate('goldscreen')}>
            <Text style={styles.Goldtext}>Gold</Text>
          </TouchableOpacity>

          <View style={styles.line}></View>

          <TouchableOpacity style={styles.SilvercoinsItem} onPress={() => navigation.navigate('silverscreen')}>
            <Text style={styles.Silvertext}>Silver</Text>
          </TouchableOpacity>
        </View>) : null}

      {/* gold */}

      <View style={styles.flex}>
        <DataTable style={styles.container}>
          <DataTable.Header >
            <DataTable.Title style={styles.GoldCoinsText}>Gold Coins</DataTable.Title>
          </DataTable.Header>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Weight</DataTable.Title>
            <DataTable.Title>Gold Price</DataTable.Title>
            <DataTable.Title>Making</DataTable.Title>
            <DataTable.Title>GST</DataTable.Title>
            <DataTable.Title>Net Amt.</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>1 Gram</DataTable.Cell>
            <DataTable.Cell>5,699</DataTable.Cell>
            <DataTable.Cell>2%</DataTable.Cell>
            <DataTable.Cell>3%</DataTable.Cell>
            <DataTable.Cell>5983.95</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>2 Gram</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>5 Gram</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>10 Gram</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>20 Gram</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>50 Gram</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>100 Gram</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>

      {/* Silver */}
      {/* <View style={styles.flex}>
        <DataTable style={styles.container}>
          <DataTable.Header >
            <DataTable.Title style={styles.GoldCoinsText}>Silver Coins</DataTable.Title>
          </DataTable.Header>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Weight</DataTable.Title>
            <DataTable.Title>Silver Price</DataTable.Title>
            <DataTable.Title>Making</DataTable.Title>
            <DataTable.Title>GST</DataTable.Title>
            <DataTable.Title>Net Amt.</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>1 Gram</DataTable.Cell>
            <DataTable.Cell>5,699</DataTable.Cell>
            <DataTable.Cell>2%</DataTable.Cell>
            <DataTable.Cell>3%</DataTable.Cell>
            <DataTable.Cell>5983.95</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>2 Gram</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>5 Gram</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>10 Gram</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>20 Gram</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>50 Gram</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>100 Gram</DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View> */}



    </View>
  )
}

export default DropDown2

const styles = StyleSheet.create({
  dropcontainer: {
    // flex: 1,
    // backgroundColor: "#eec06b"
  },
  heading: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 30,
    alignSelf: "center",
    color: "black"
  },
  dropDownSelector: {
    // flex: 0.3,
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
  },
  dropDownArea: {
    width: "87%",
    height: 100,
    borderRadius: 5,
    marginTop: 2,
    backgroundColor: "#fff",
    elevation: 5,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  search: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "black",
    alignSelf: "center",
    marginTop: 20,
    paddingLeft: 15,
  },
  coinsItem: {
    width: "85%",
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center"
  },
  line: {
    width: "100%",
    height: 2,
    backgroundColor: "black",
    alignSelf: 'center'
  },
  Goldtext: {
    fontSize: 25,
    color: "black",
    fontWeight: "600",
    // textAlign: "center",
  },
  Silvertext: {
    fontSize: 25,
    color: "black",
    fontWeight: "600",
    // textAlign: "center"
  },
  GoldcoinsItem: {
    width: "85%",
    height: 50,
    // borderBottomWidth: 0.2,
    // borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center"
  },
  SilvercoinsItem: {
    width: "85%",
    height: 50,
    // borderBottomWidth: 0.2,
    // borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center"
  },


  // Table css

  container: {
    padding: 15,
    fontSize: 30,
    // flex: 0.4,
    // marginTop: 200,
  },
  tableHeader: {
    borderColor: '#DCDCDC',
  },
  GoldCoinsText: {
    justifyContent: "center",
    fontSize: 25,
    color: "black",
    fontWeight: "600",
  },
  flex: {
    // flex: 0.8,
    marginTop: 80,
    backgroundColor: "green"
  }

})