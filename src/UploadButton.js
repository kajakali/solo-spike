import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


class UploadButton extends Component {


    handleCapture = ({ target }) => {

    }
    render() {
        const {classes} = this.props;
        return ( 
            <>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    onChange={this.handleCapture}
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className={classes.button}>
                        Upload 
                        <CloudUploadIcon className={`${this.props.classes.rightIcon} ${this.props.classes.iconSmall}`}/>
                    </Button>
                </label>
                {JSON.stringify(this.props)}
            </> 
        )   
    }
}

export default UploadButton;