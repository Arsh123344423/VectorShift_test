import { BaseNode } from "../BaseNode";

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Output"
      nodeType="output"
      nameConfig={{
        label: "Name:",
        defaultValue:
          data?.outputName ||
          id.replace("customOutput-","output_"),
      }}
      selectConfig={{
        label: "Type:",
        defaultValue:
          data?.outputType || "Text",
        options: ["Text", "Image"],
      }}
      inputs={[
        {
          id: "value",
        },
      ]}
      styles={{
        container: {
          borderLeft: "5px solid #ff9800",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(255, 152, 0, 0.1)",
        },
        title: {
          color: "#ff9800",
          borderBottom: "2px solid #ff9800",
        },
      }}
    />
  );
};