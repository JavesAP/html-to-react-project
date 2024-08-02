import { Component } from "react";
import { CharacterCard } from "./character-card";
import '../css/character-cards.css'

export class CharacterContainer extends Component {

    render() {
        const { data } = this.props;
        return (
            <section id="character-cards">
                {data.map(character => <CharacterCard key={character.name} character={ character }/>)}
            </section>
        )
    }
}