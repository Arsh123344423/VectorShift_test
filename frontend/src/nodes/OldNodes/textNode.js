import { BaseNode } from "../BaseNode";

const JS_KEYWORDS = new Set([
  "break","case","catch","class","const","continue","debugger","default",
  "delete","do","else","export","extends","finally","for","function",
  "if","import","in","instanceof","new","return","super","switch",
  "this","throw","try","typeof","var","void","while","with","yield",
  "let","static","enum","await","implements","package","protected",
  "interface","private","public"
]);

const getValidVariables = (text = "") => {
  const matches = [...text.matchAll(/\{\{\s*([^{}]+?)\s*\}\}/g)];
  // checks for valid values and pushes them here
  return matches
    .map(match => match[1].trim())// add portion
    .filter(variable => {
      const isValidIdentifier = // validity portion
        /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(variable);

      return isValidIdentifier && !JS_KEYWORDS.has(variable);
    });
};

export const TextNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Text"
      nodeType="text"
      textAreaConfig={{
        label: "Text:",
        defaultValue: data?.text || "{{input}}",
      }}
      sidebarConfig={{
        title: "Variables",
        extractor: getValidVariables,
      }}
      inputs={[
        { id: "input" },
      ]}
      outputs={[
        { id: "output" },
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