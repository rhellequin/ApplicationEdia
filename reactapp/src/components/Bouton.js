import React, { Component } from 'react';
import'./Bouton.css';
import Modal from './Modal';

export default class Bouton extends Component {

state = {
    visible: false
}

montre = () => {
this.setState({
    visible: true
})
}

cache = () => {
    this.setState({
        visible: false
    })
}


    render() {
        return (
            <div>
                <button onClick={this.montre} className='Bouton'>Clic-moi</button>
                <Modal
                visible={this.state.visible}
                cache={this.cache}
                />
            </div>
        )
    }
}
