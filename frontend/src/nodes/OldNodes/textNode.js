import { BaseNode } from "../BaseNode";

export const TextNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Text"
      nodeType="text"
      textAreaConfig={{
        label: "Text:",
        defaultValue:
          data?.text || "{{input}}",
      }}
      inputs={[
        {
          id: "input",
        },
      ]}
      outputs={[
        {
          id: "output",
        },
      ]}
      styles={{
        container: {
          borderLeft: "5px solid #9c27b0",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(156, 39, 176, 0.1)",
        },
        title: {
          color: "#9c27b0",
          borderBottom: "2px solid #9c27b0",
        },
      }}
    />
  );
};