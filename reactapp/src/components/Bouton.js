import React, { Component } from 'react';
import'./visuels/Bouton.css';
import Modal2 from './Modal';

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
                <button onClick={this.montre} className='Bouton'>En savoir +</button>
                <Modal2
                visible={this.state.visible}
                cache={this.cache}
                
                />
            </div>
        )
    }
}
