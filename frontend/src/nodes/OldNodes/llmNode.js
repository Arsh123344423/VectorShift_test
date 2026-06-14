import { BaseNode } from "../BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      nodeType="llm"
      inputs={[
        {
          id: "system",
          style: {
            top: "33%",
          },
        },
        {
          id: "prompt",
          style: {
            top: "66%",
          },
        },
      ]}
      outputs={[
        {
          id: "response",
          style: {},
        },
      ]}
      styles={{
        container: {
          background: "#ffffff",
          border: "2px solid #2196f3",
          borderLeft: "5px solid #2196f3",
          borderRadius: 12,
          padding: 12,
          boxShadow: "0 2px 8px rgba(33, 150, 243, 0.1)",
        },
        title: {
          color: "#2196f3",
          fontSize: 14,
          fontWeight: 700,
          marginBottom: 12,
          borderBottom: "2px solid #2196f3",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        },
        label: {
          fontSize: 12,
          color: "#333",
          fontWeight: 600,
          marginTop: 10,
          marginBottom: 4,
          textTransform: "uppercase",
          letterSpacing: "0.3px",
        },
        input: {
          background: "#f8f9fa",
          border: "1px solid #ddd",
          borderRadius: 6,
          padding: "8px 12px",
          fontSize: 12,
          color: "#333",
        },
        textarea: {
          background: "#f8f9fa",
          border: "1px solid #ddd",
          borderRadius: 6,
          padding: "8px 12px",
          fontSize: 12,
          color: "#333",
        },
      }}
    >
      this is llm node
    </BaseNode>
  );
};