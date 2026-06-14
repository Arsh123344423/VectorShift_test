import { BaseNode } from "../BaseNode";

export const DatabaseNode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            title="Database"
            nodeType="database"

            nameConfig={{
                label: "Collection:",
                defaultValue: "users"
            }}

            inputs={[
                { id: "query" }
            ]}

            outputs={[
                { id: "result" }
            ]}
            styles={{
                container: {
                    background: "#ffffff",
                    borderLeft: "5px solid #009688",
                    borderRadius: 12,
                    boxShadow: "0 2px 8px rgba(0, 150, 136, 0.1)",
                },
                title: {
                    color: "#009688",
                    borderBottom: "2px solid #009688",
                },
            }}
        />
    )
}