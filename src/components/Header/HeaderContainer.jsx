import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import * as axios from 'axios'
import {setAuthUserData} from '../../redux/auth-reducer';
import { authAPI } from '../../api/api';


class HeaderAPIComponent extends React.Component {

    componentDidMount() { 
        authAPI.getAuthApi().then(data => {
            if(data.resultCode===0) {
                this.props.setAuthUserData(data.data.id, data.data.email, data.data.login);
            }
        });
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


const HeaderContainer = connect(mapStateToProps, {
    setAuthUserData,
})(HeaderAPIComponent);

export default HeaderContainer;