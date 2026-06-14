import { BaseNode } from "../BaseNode";
export const ApiNode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            title="API"
            nodeType="api"

            nameConfig={{
                label: "URL:",
                defaultValue: "https://api.example.com"
            }}

            textAreaConfig={{
                label: "Body:",
                defaultValue: data?.text || "{{workflow.input}}",
            }}

            inputs={[
                { id: "request" }
            ]}

            outputs={[
                { id: "response" }
            ]}
            styles={{
                container: {
                    background: "#ffffff",
                    borderLeft: "5px solid #f44336",
                    borderRadius: 12,
                    boxShadow: "0 2px 8px rgba(244, 67, 54, 0.1)",
                },
                title: {
                    color: "#f44336",
                    borderBottom: "2px solid #f44336",
                },
            }}
        />
    )
}