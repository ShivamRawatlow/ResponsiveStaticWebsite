import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#4B88A2';
const arcOrange = '#BB0A21';
const arcGrey = '#868686'

const theme = createMuiTheme({
  palette: { 
    common: {
      //@ts-ignore
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main:arcOrange,
    },
  },
  typography: {
    //fontFamily: 'Roboto',
    //@ts-ignore
    tab: {
      fontFamily: 'Roboto',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    h2:{
      fontFamily:'Roboto',
      fontWeight:700,
      fontSize:'2.5rem',
      color:arcBlue,
      lineHeight:1.5 // height between two lines
    },
    h3:{
      fontFamily:"Pacifico",
      fontSize:'2.5rem',
      color:arcBlue
    },
    h4:{
      fontFamily:'Roboto',
      fontSize:'1.75rem',
      color:arcBlue,
      fontWeight:700
    },
    subtitle1:{
      fontSize:'1.25rem',
      fontWeight:300,
      color:arcGrey
    },
    subtitle2:{
      fontSize:'1.25rem',
      fontWeight:300,
      color:'white'
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    body1:{
      fontSize:'1.25rem',
      color:arcGrey,
      fontWeight:300
    },
    //@ts-ignore
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: '50',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },   
  },
});

export default theme;
