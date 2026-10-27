function PlayerCard({ player, onDelete }) {
  return (
    <li className={`card ${player.position.toLowerCase()}`}>
      #{player.number} {player.name} - {player.position}{" "}
      <button className="btn-danger" onClick={() => onDelete(player.id)}>
        Xóa
      </button>
    </li>
  );
}

export default PlayerCard;
