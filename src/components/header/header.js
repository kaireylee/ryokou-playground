import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { Menu } from 'semantic-ui-react'; 
import './style.css'; 
import logo from '../../assets/images/logo.png'; 

export default class Header extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state 
    
        return (
                <>
                <Menu size='massive'>
                    <Menu.Item as={Link} to='/'>
                        <img alt="logo" src={logo} />
                    </Menu.Item>
                    <Menu.Item 
                        name='About'
                        as={Link}
                        to='/about'
                        active={activeItem === 'About'}
                        onClick={this.handleItemClick} />    
                    <Menu.Item 
                        name='Login'
                        as={Link}
                        to='/login'
                        active={activeItem === 'Login'}
                        position='right' />
                </Menu>
                </>
        )
    }
}
