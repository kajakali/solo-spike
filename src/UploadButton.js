import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

//Access Key ID:
//AKIAINEGXSKPLLG4PGLQ
//Secret Access Key:
//KuUbvDnjmWwO+qT9XZ0WuuqO8dOlXxJ2p947d6E1
class UploadButton extends Component {

        state = ({
            image:[],
        })

    handleCapture = ({ target }) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = (e) => {
            this.setState({
                image: [e.target.result]
            });
        };
    };
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