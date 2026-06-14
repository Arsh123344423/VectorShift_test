import { BaseNode } from "../BaseNode";
export const ConditionNode = ({id}) => {
    return (
        <BaseNode
            id={id}
            title="Condition"
            nodeType="condition"

            textAreaConfig={{
                label: "Condition:",
                defaultValue: "{{age}} > 18"
            }}

            inputs={[
                { id: "input" }
            ]}

            outputs={[
                { id: "true" },
                { id: "false", style: { top: "70%" } }
            ]}
            styles={{
                container: {
                    borderLeft: "5px solid #ff5722",
                    borderRadius: 12,
                    boxShadow: "0 2px 8px rgba(255, 87, 34, 0.1)",
                },
                title: {
                    color: "#ff5722",
                    borderBottom: "2px solid #ff5722",
                },
            }}
        />
    )
}