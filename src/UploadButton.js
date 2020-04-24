import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


class UploadButton extends Component {
    render() {
        const {classes} = this.props;
        return ( 
            <>
            {JSON.stringify(this.props)}
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
                        <CloudUploadIcon className={`${this.props.classes.rightIcon} ${this.props.classes.iconSmall}`}/>
                    </Button>
                </label>
            </> 
        )   
    }
}

export default UploadButton;