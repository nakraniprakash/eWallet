import React, {Component} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import SideNav from '../../components/SideNav/SideNav';
import Intro from '../../components/Intro/Intro';
import Transactions from '../../components/Transactions/Transactions';
import SignUp from '../../containers/SignUp/SignUp';
import SignIn from '../../containers/SignIn/SignIn';
import Contact from '../../containers/Contact/Contact';
import Wallet from '../../containers/Wallet/Wallet';
import MyAccount from '../../containers/MyAccount/MyAccount';


class Layout extends Component {
    render () {
        return(
            <Wrapper>
                <Header />
                <SideNav />
                <div className="main">
                    {this.props.children}
                </div>
            </Wrapper>
        );
    }
}

export default Layout;