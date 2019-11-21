import React from 'react'
import { Text, Image, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  header: {
    paddingBottom: 12,
  },
  name: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'LatoBold',
  },
  detailsBlock: {
    textAlign: 'center',
    display: 'inline-block'
  },
  detail: {

  }
})

const HeaderPdf = ({
  name,
  address,
  email,
  phone,
  website,
}) => {
  return (
    <View styles={styles.header} fixed>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.detailsBlock}>
        <Text>{address}</Text>
        <Text>{email} | {website} | {phone}</Text>
      </View>
    </View>
  )
}

export default HeaderPdf