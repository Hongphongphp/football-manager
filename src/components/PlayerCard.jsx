import Icon from "./Icon";

const POSITION_LABEL = {
  GK: "Thủ môn",
  DF: "Hậu vệ",
  MF: "Tiền vệ",
  FW: "Tiền đạo",
};

function PlayerCard({ player, onDelete }) {
  const pos = player.position.toLowerCase();

  return (
    <li className={`card player-card ${pos}`}>
      <div className={`jersey ${pos}`}>{player.number}</div>
      <div className="player-info">
        <strong>{player.name}</strong>
        <span className={`pos-badge ${pos}`}>
          {POSITION_LABEL[player.position]}
        </span>
      </div>
      <button
        className="btn-danger"
        onClick={() => onDelete(player.id)}
        title="Xóa cầu thủ"
      >
        <Icon name="trash" size={16} />
        <span>Xóa</span>
      </button>
    </li>
  );
}

export default PlayerCard;
