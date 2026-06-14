import { DraggableNode } from './draggableNode';
import './index.css';

export const PipelineToolbar = () => {
    const nodeInfos = [
        { type: 'customInput', label: 'Input', desc: 'Data input node' },
        { type: 'llm', label: 'LLM', desc: 'Language model' },
        { type: 'customOutput', label: 'Output', desc: 'Data output node' },
        { type: 'text', label: 'Text', desc: 'Text processing' },
        // added 5 new node
        { type: 'api', label: 'API', desc: 'API connector' },
        { type: 'condition', label: 'Condition', desc: 'Conditional logic' },
        { type: 'database', label: 'Database', desc: 'DB connector' },
        { type: 'cleaner', label: 'Transform', desc: 'Data transform' },
        { type: 'prompt', label: 'Prompt', desc: 'Prompt template' },
    ];

    return (
        <div className="sidebar">
            <h3 className="sidebar-title">Nodes</h3>
            <div className="sidebar-nodes-grid">
                {nodeInfos.map((nodeInfo, idx) => ( //creating a loop map for each iterative turn 
                    <div key={idx} className="sidebar-node-item">
                        <DraggableNode 
                            type={nodeInfo.type}
                            label={nodeInfo.label}
                            desc={nodeInfo.desc} //added new node desc. function
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};