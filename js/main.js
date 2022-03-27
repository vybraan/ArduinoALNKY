const firebaseConfig = {
    apiKey: "AIzaSyCmQ4N3sXYEEDsy-Iq0Ytao1W3y2HB5lHU",
    authDomain: "arduinoalnky.firebaseapp.com",
    projectId: "arduinoalnky",
    storageBucket: "arduinoalnky.appspot.com",
    messagingSenderId: "571343132475",
    appId: "1:571343132475:web:03d0e634fa7e552a44091e",
    measurementId: "G-9NF7G87CBE"
}


firebase.initializeApp(firebaseConfig)



function ledOn(){
    firebase.database().ref('SALA').set({estado: 'LIGADA'})
}


function ledOff(){
    firebase.database().ref('SALA').set({estado: 'DESLIGADA'})
}


function ledOn1(){
    firebase.database().ref('QUARTO1').set({estado: 'LIGADA'})
}


function ledOff1(){
    firebase.database().ref('QUARTO1').set({estado: 'DESLIGADA'})
}


function ledOn2(){
    firebase.database().ref('QUARTO2').set({estado: 'LIGADA'})
}


function ledOff2(){
    firebase.database().ref('QUARTO2').set({estado: 'DESLIGADA'})
}