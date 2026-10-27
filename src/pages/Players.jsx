import PlayerCard from "../components/PlayerCard";
import PageHeader from "../components/PageHeader";
import Icon from "../components/Icon";
import { useState } from "react";
function Players({ players, setPlayers }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("FW");
  const [filter, setFilter] = useState("ALL");

  const handleDelete = (id) => {
    const newPlayers = players.filter((player) => player.id !== id);
    setPlayers(newPlayers);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (name === "") return;
    const newPlayer = {
      id: Date.now(),
      name: name,
      number: Number(number),
      position: position,
      phone: "",
      active: true,
    };

    setPlayers([...players, newPlayer]);
    setName("");
    setNumber("");
    setPosition("FW");
  };

  const filteredPlayers =
    filter === "ALL"
      ? players
      : players.filter((player) => player.position === filter);

  return (
    <div>
      <PageHeader
        icon="users"
        title="Cầu thủ"
        subtitle={`${players.length} cầu thủ trong đội`}
      />
      <form className="card toolbar" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Tên cầu thủ"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Số áo"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <select value={position} onChange={(e) => setPosition(e.target.value)}>
          <option value="GK">Thủ môn</option>
          <option value="DF">Hậu vệ</option>
          <option value="MF">Tiền vệ</option>
          <option value="FW">Tiền đạo</option>
        </select>
        <button type="submit">
          <Icon name="plus" size={18} />
          Thêm
        </button>
      </form>

      <div className="toolbar">
        <span className="filter-label">
          <Icon name="filter" size={16} />
          Lọc theo vị trí
        </span>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="ALL">Tất cả</option>
        <option value="GK">Thủ môn</option>
        <option value="DF">Hậu vệ</option>
        <option value="MF">Tiền vệ</option>
        <option value="FW">Tiền đạo</option>
      </select>
      </div>

      <ul className="list">
        {filteredPlayers.map((player) => {
          return (
            <PlayerCard
              player={player}
              key={player.id}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Players;
