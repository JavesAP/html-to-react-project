export function TableRow({character, index}) {
  const {name, skillset, votes } = character;
    return (
      <>
        <tr className={index % 2 === 0 ? "light" : "dark"}>
          <td>{name}</td>
          <td>{skillset}</td>
          <td>{votes}</td>
        </tr>
      </>
    )
}