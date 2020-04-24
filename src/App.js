import React from 'react';
import logo from './logo.svg';
import './App.css';

import { withStyles } from '@material-ui/core/styles/';
import UploadButton from './UploadButton';
import Button from '@material-ui/core/Button';
import CameraFront from '@material-ui/icons/CameraFront';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';




const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
});

function App(props) {
const { classes } = props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>hello there. This is to make useful testing. I would like to play with
          themes, and also with confirmation dialogs, and also perhaps with uploading images.
          so I will make some buttons, style them with my theme, and then make confirmation dialog for them.
          Then I will try uploading images using AWS S3? or field...something
        </p>
          <UploadButton classes={classes}/>
          <p>{JSON.stringify(props)}</p>

          <div>
            <Button variant="contained" color="primary" size="large" className={classes.button}>Click me, I'm primary!</Button>
            <Button variant="outlined" color="secondary" size="small" className={classes.button}>Click me, I'm secondary</Button>
            <Button className={classes.button}>Click me to get a confirmation dialogue</Button>
            <Button variant="contained" color="primary" className={classes.button}>Hello</Button>
            <CameraFront />
          </div>
          <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="secondary" component="span" className={classes.button}>
                        Upload 
                        <CloudUploadIcon className={`${props.classes.rightIcon} ${props.classes.iconSmall}`}/>
                    </Button>
                </label>
       

      </div>
      
    );
  
}


export default withStyles(styles)(App);
