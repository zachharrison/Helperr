import "./ChatListItem.css";

export default function ChatListItem({ data, setChat }) {
  const { id, title, message } = data;

  return (
    <div className="conversation-list-item" onClick={() => setChat(id)}>
      <div key={id} className="conversation-info">
        <h1 className="conversation-title">{title}</h1>
        <p className="conversation-snippet">{message}</p>
      </div>
    </div>
  );
}
