import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { Menu, Button } from 'semantic-ui-react'; 
import './style.css'; 
import logo from '../../assets/images/logo.png'; 

export default class Header extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state 
    
        return (
                <>
                <Menu className="nav" size='massive'>
                    <Menu.Item 
                        as={Link} 
                        to='/' 
                        className='nav_item_left'
                        active={activeItem === 'Join now'}
                        onClick={this.handleItemClick}>
                            <img alt="logo" src={logo} />
                    </Menu.Item>
                    <Menu.Item                     
                        position='right'
                        name='Join now'
                        as={Link}
                        to='/register'
                        active={activeItem === 'Join now'}
                        onClick={this.handleItemClick} />    
                    <Menu.Item 
                        className='nav_item_right'
                        active={activeItem === 'Sign in'}
                        onClick={this.handleItemClick}>
                            <Button                            
                                as={Link}
                                to='/login' 
                                basic 
                                color='blue'
                                content='Sign in' />
                    </Menu.Item>
                </Menu>
                </>
        )
    }
}
