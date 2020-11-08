import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import * as axios from 'axios'
import {setAuthUserData} from '../../redux/auth-reducer';


class HeaderAPIComponent extends React.Component {

    componentDidMount() { 
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(response => {
            if(response.data.resultCode===0) {
                this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login);
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