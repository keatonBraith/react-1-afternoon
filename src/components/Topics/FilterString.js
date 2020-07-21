import React, {Component} from 'react';

export default class FilterString extends Component {

    constructor(){
        super();

        this.state = {
            pokemon: ['Snorlax', 'Pikachu', 'Onyx', 'Squirtel', 'Charmander', 'Jigglypuff', 'MewTwo', 'Bulbasaur'],
            userInput: '',
            filteredPokemon: ''
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterPokemon(userInput) {
        let pokemon = this.state.pokemon;
        let filteredPokemon = [];

        for ( let i = 0; i < pokemon.length; i++) {
            if ( pokemon[i].includes(userInput) ) {
                filteredPokemon.push(pokemon[i]);
            }
        }
        this.setState({ filteredPokemon: filteredPokemon })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Pokemon: { JSON.stringify(this.state.pokemon, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.filterPokemon(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Pokemon: { JSON.stringify(this.state.filteredPokemon, null, 10) } </span>
            </div>
        )
    }
}