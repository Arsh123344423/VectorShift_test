import { BaseNode } from '../BaseNode';

export const PromptNode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            title="Prompt"
            nodeType="prompt"

            textAreaConfig={{
                label: "Template:",
                defaultValue:
                    "Summarize {{article}} in 5 bullet points."
            }}

            inputs={[
                { id: "variables" }
            ]}

            outputs={[
                { id: "prompt" }
            ]}
            styles={{
                container: {
                    background: "#ffffff",
                    borderLeft: "5px solid #673ab7",
                    borderRadius: 12,
                    boxShadow: "0 2px 8px rgba(103, 58, 183, 0.1)",
                },
                title: {
                    color: "#673ab7",
                    borderBottom: "2px solid #673ab7",
                },
            }}
        />
    )
}