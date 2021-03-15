import React, {Component} from 'react';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';

import classes from './NotFound.module.css';

class Content extends Component {
    render(){
        return(
            <div className={classes.Content}>
                <TwoColumnDiv 
                    buttonText ={'Take me back'}
                    header = {'Oops!\n This page \ncannot be found.'}
                    > 
                    The page you were looking for doesn't exist <br />
                    or an error happened.
                </TwoColumnDiv>
            </div>
        )
    }
};

export default Content;