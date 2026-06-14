import { BaseNode } from "../BaseNode";

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Input"
      nodeType="input"
      nameConfig={{
        label: "Name:",
        defaultValue:
          data?.inputName ||
          id.replace(
            "customInput-",
            "input_"
          ),
      }}
      selectConfig={{
        label: "Type:",
        defaultValue:
          data?.inputType || "Text",
        options: ["Text", "File"],
      }}
      outputs={[
        {
          id: "value",
        },
      ]}
      styles={{
        container: {
          borderLeft: "5px solid #4caf50",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(76, 175, 80, 0.1)",
        },
        title: {
          color: "#4caf50",
          borderBottom: "2px solid #4caf50",
        },
      }}
    />
  );
};