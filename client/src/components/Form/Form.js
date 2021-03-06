import React, {useState} from 'react';
import { TextField, Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import useStyles from './styles';
import {createDevice} from '../../actions/devices';

const initialState = {deviceName: '', deviceID: '', email: ''};

const Form = () => {
    const [deviceData, setDeviceData] = useState(initialState);
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    // get username
    const user = JSON.parse(localStorage.getItem('profile'));

    const handleSubmit = (e) => {
      deviceData.email = user?.result?.email;
      e.preventDefault();
      dispatch(createDevice(deviceData, history));
    }

    const handleChange = (e) => {
      setDeviceData({...deviceData, [e.target.name]: e.target.value});
    }

    const clear = () => {
      setDeviceData({deviceName: '', deviceID: '', email: ''});
    }

    return (
        
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <TextField name="deviceName" variant="outlined" label="device name" onChange={handleChange} />
          <br/>
          <br/>
          <TextField name="deviceID" variant="outlined" label="device ID" onChange={handleChange} />
          <br/>
          <br/>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
          <br/>
          <br/>
          <Button variant="contained" color="secondary" size="large" onClick={clear} >Clear</Button>
        </form>
     
    );
}

export default Form;
