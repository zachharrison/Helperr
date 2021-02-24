import "./ChatListItem.css";

export default function ChatListItem({ data, setChat }) {
  const { id, title, message, otherUser } = data;
  console.log(data);

  return (
    <div className="conversation-list-item" onClick={() => setChat(id)}>
      <div key={id} className="conversation-info">
        <h1 className="conversation-title">{otherUser}</h1>
        <p className="conversation-snippet">{message}</p>
      </div>
    </div>
  );
}
