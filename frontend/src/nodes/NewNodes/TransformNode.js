import { BaseNode } from "../BaseNode";
// A node that transforms raw data into a structured format using JavaScript code.
export const TransformNode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            title="Transform"
            nodeType="transform"

            textAreaConfig={{
                label: "JavaScript:",
                defaultValue: 
                data?.text || "return input;",
            }}

            inputs={[
                { id: "input" }
            ]}

            outputs={[
                { id: "output" }
            ]}
            styles={{
                container: {
                    borderLeft: "5px solid #ff6f00",
                    borderRadius: 12,
                    boxShadow: "0 2px 8px rgba(255, 111, 0, 0.1)",
                },
                title: {
                    color: "#ff6f00",
                    borderBottom: "2px solid #ff6f00",
                },
            }}
        />
    )
}