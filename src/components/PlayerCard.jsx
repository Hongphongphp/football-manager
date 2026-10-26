function PlayerCard({ player, onDelete }) {
  return (
    <li className={`player-card ${player.position.toLowerCase()}`}>
      #{player.number} {player.name} - {player.position}{" "}
      <button onClick={() => onDelete(player.id)}>Xóa</button>
    </li>
  );
}

export default PlayerCard;
