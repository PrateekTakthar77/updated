import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DataTable } from 'react-native-paper';

const GoldScreen = () => {
    return (
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
    )
}

export default GoldScreen;

const styles = StyleSheet.create({
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
        // flex: 0.6,
        marginTop: 20,
        backgroundColor: "green"
    }
});