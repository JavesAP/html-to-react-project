import { Component } from "react"

export class CharacterCard extends Component {
  render() {
    const { name, nickName, imageUrl, background } = this.props.character;
    return (
      <>
      <div className="card">
        <div className="card-titles">
          <h3>{name}</h3>
          {nickName && <h4>{nickName}</h4>}
        </div>
        <img src={imageUrl} alt="" />
        <p>{background}</p>
      </div>
      </>
    )
  }
}