// draggableNode.js

export const DraggableNode = ({ type, label ,desc }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className="sidebar-node-card"
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
        <div className="sidebar-node-label">{label}</div>
        {desc && <div className="sidebar-node-desc">{desc}</div>}
      </div>
    );
  };
  