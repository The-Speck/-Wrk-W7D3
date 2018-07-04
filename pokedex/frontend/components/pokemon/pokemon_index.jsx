import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.requestAllPokemon();
  }

  render() {

    const pokemon = this.props.pokemon.map((poke) => {
      return <li key={poke.id}><h2>{poke.name}</h2> <img src={poke.imageUrl}></img></li>;
    });

    return (
      <ul>
        {pokemon}
      </ul>
    );
  }
}

export default PokemonIndex;
