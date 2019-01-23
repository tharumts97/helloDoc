import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    heading:{
        fontSize:25,
        textAlign: 'center'
    },
    input:{
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#76B0C6',
        marginBottom:5,
        justifyContent:'center',
        borderRadius:5
    },
    parent:{
        flexGrow:1,
        justifyContent:'center',
        backgroundColor:'white',
        justifyContent:'center'
    },
    loginTxt:{
        color:'#01A9DB',
        fontSize:20,
        textAlign:'center',
        marginBottom:15,
        marginTop:10,
    },
    buttonStyle: {
        padding:15,
        backgroundColor: '#19334d',
        borderRadius:5,
        width:'50%',
        alignItems:'center',
        marginLeft:100,
        marginTop:5,
        marginBottom:5
      },

      nextButton:{
        padding:15,
        backgroundColor: '#76B0C6',
        borderRadius:100,
        width:'18%',
        alignItems:'flex-start',
        marginLeft:100,
        marginTop:5,
        marginBottom:5
      },
      signupTxt:{
          fontSize:20,
          color: 'white'
      },
      signupButton:{
          fontSize:16,
          fontWeight:'500'
      },
      signupTxtCont:{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          paddingVertical:5,
          flexDirection:'row'
      },
      imagepic: {
          width:140,
          height:180,
          alignItems:'center',
          flexDirection: 'column',
          marginLeft:120
          
      },

      pbar: {
          color: '#6FB8F7',
      },

      commt:{
        justifyContent:'center',
        flexDirection: 'column',
      },

      progBar:{
          flex:2,
          marginTop:10,
          flexGrow:1,
      },

      form:{
          marginTop:5
      },

      timeText:{
          color:'red',
          fontSize:20,
          textAlign:'center',
      },

      textInp:{
          height:100,
          margin:20,
          padding:10,
          borderColor:'grey',
          borderWidth:1,
      },

      headText:{
          color: 'black',
          fontSize:28,
          textAlign:'center',
          alignItems:'flex-start',
          marginTop:80
      },

      iconimg:{
          color:'#19334d',
          alignItems:'flex-start',
          marginRight:50
      },

      iconView:{
          flex:1,
          flexDirection:'row-reverse'
      }


})