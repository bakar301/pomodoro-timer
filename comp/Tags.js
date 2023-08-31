import { StyleSheet, Text, View, Button, Modal, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const Tags = () => {

  const [Min, SetMin] = useState(25);
  const [Sec, setSec] = useState(0);
  const [TimeRun, setTimeRun] = useState(false);
  let intervalRef = useRef();

  const [togg, setTogg] = useState(false)
  const [num, setNum] = useState(setNum)
  useEffect(() => {

    if (TimeRun) {
      intervalRef.current = setInterval(() => {
        if (Sec == 0) {
          SetMin(Min - 1);
          setSec(59);
        } else {
          setSec(Sec - 1)
        }
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);


  }, [Sec, Min, TimeRun]);

  const Start = () => {
    setTimeRun(true)
  }
  const Stop = () => {
    setTimeRun(false)
  }
  const Reset = () => {
    setTimeRun(false);
    clearInterval(intervalRef.current)
    SetMin(25);
    setSec(0);
  }
  const Break = () => {
    clearInterval(intervalRef.current)
    SetMin(25);
    setSec(0);
    setTimeRun(true);

  }
  const ReSet = async (newNum) => {
    clearInterval(intervalRef.current)

    SetMin(Number(newNum))

  }

  return (

    <View style={styles.main}>

      <Modal
        transparent={true}
        visible={togg}
        animationType='fade'
      >
        <View style={styles.centerview}>
          <View style={styles.modalrview}>
            <Text style={{ marginBottom: 15, fontSize: 25, fontWeight: 'bold' }}>Work Time</Text>
            <TextInput
              style={styles.TextInput}
              onChangeText={(newNum) => ReSet(newNum)}
              placeholder='Enter Minutes'
              keyboardType='number-pad'
              value={num}
            />
            <Button
              title='close it'
              onPress={() => { setTogg(false); setTimeRun(true) }}
            />
          </View>
        </View>

      </Modal>


      <Text style={styles.TxtM}>Pomodoro</Text>


      <View style={styles.main1}>


        <TouchableOpacity onPress={() => setTogg(true)}>
          <Text style={styles.Txt3}>Work</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Break}>
          <Text style={styles.Txt3}>Break</Text>
        </TouchableOpacity>






      </View>


      <View style={styles.main2}>
        <Text style={{ fontSize: 90, justifyContent: 'center', textAlign: 'center', }}>{Min}</Text>
        <Text style={{ fontSize: 90, justifyContent: 'center', textAlign: 'center', }}>{Sec}</Text>

      </View>

      <View style={styles.main3}>

        {
          TimeRun == false ?

            <TouchableOpacity onPress={Start}>
              <Text style={styles.txt2}>Start</Text>
            </TouchableOpacity> :
            <>
              <TouchableOpacity onPress={Stop}>
                <Text style={styles.txt}>Pause</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={Reset}>
                <Text style={styles.txt}>Reset</Text>
              </TouchableOpacity>
            </>
        }

      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  main: {
    backgroundColor: "#0a0612",
    flex: 1
  },

  TxtM: {
    fontSize: 35,
    color: "white",
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 30
  },
  main1: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 50,
    height: 32,
    width: 300,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 20,
    elevation: 2,
    marginBottom: 20,
    marginTop: 2,
    backgroundColor: '#1f1137'
  },
  main2: {
    justifyContent: 'center',
    margin: 50,
    marginTop: 50,
    marginBottom: 40,
    borderRadius: 100,
    height: 300,
    width: 300,
    backgroundColor: 'grey',

  },
  main3: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 50,
    height: 30,
    width: 300,
    borderRadius: 20,
    margin: 10,

    shadowColor: 'black',
    shadowOpacity: 20,
    elevation: 2,
    marginTop: 2,
    backgroundColor: '#1f1137'
  },
  txt: {
    marginHorizontal: 60,
    marginTop: 4,
    fontWeight: 'bold',
    fontSize: 18,
    color: "white",
    borderRadius: 10
  },
  txt2: {

    marginHorizontal: 22,
    marginTop: 4,
    fontWeight: 'bold',
    fontSize: 18,
    color: "white",
    borderRadius: 10
  },
  Txt3: {
    marginHorizontal: 70,
    marginTop: 4,
    fontWeight: 'bold',
    fontSize: 18,
    color: "white",
    borderRadius: 10
  },



  btn: {
    flex: 1,
    justifyContent: 'center'
  },
  centerview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalrview: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderColor: 'black',
    borderRadius: 20,
    elevation: 5,
    padding: 60
  },
  TextInput: {
    fontSize: 22,
    textAlign: 'left',
    margin: 10,
    color: "blue",
    borderColor: "#1f1137",
    borderWidth: 2,

  }

})

export default Tags;