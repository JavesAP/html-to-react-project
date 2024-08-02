import { TableRow } from "./table-row";
import '../css/character-ratings.css'

export function CharacterTable({ data }) {
    const highestToLowestVoted = data.toSorted((a,b) => b.votes - a.votes).slice(0, 5);
    return (
      <section id='character-ratings'>
        <h4>Top Characters</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {highestToLowestVoted.map((character, index) => <TableRow key={character.name} character={ character } index={index + 1}/>)}
          </tbody>
        </table>
      </section>
    )
}