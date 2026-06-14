import { useState } from "react";
import { Handle, useReactFlow, Position } from "reactflow";
import '../index.css';

export const BaseNode = ({
    id,
    title,
    nameConfig,
    selectConfig,
    textAreaConfig,
    sidebarConfig, // For Variables
    inputs = [],
    outputs = [],
    children,
    styles = {},
    nodeType = "default",
}) => {
    const [name, setName] = useState(
        nameConfig?.defaultValue || ""
    );

    const [selectValue, setSelectValue] = useState(
        selectConfig?.defaultValue || ""
    );

    const [text, setText] = useState(
        textAreaConfig?.defaultValue || ""
    );

    const [isHovered, setIsHovered] = useState(false);
    const { getEdges } = useReactFlow();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const edges = getEdges();
    const hasConnection = edges.some(
        (edge) => edge.source === id || edge.target === id
    );

    const isActive = isHovered || hasConnection;

    const defaultStyles = {
        container: {
            width: 240,
            minHeight: 100,
            borderRadius: 12,
            padding: 12,
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        },
        sidebar: {
            marginTop: 10,
            width: 100,
            borderLeft: "1px solid #e5e5e5",
            paddingLeft: 10,
            marginLeft: 10,
        },

        sidebarTitle: {
            fontSize: 11,
            fontWeight: 700,
            marginBottom: 8,
            textTransform: "uppercase",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.4px",
        },

        sidebarItem: {
            padding: "4px 8px",
            marginBottom: 4,
            borderRadius: 6,
            background: "#f5f5f5",
            fontSize: 11,
            fontFamily: "'Courier New', monospace",
            wordBreak: "break-word",
        },

        title: {
            fontWeight: "700",
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            paddingBottom: 8,
            borderBottom: "2px solid #667eea",
        },

        label: {
            display: "block",
            marginTop: 10,
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.3px",
            fontFamily:"'Courier New', monospace",
            marginBottom: 4,
        },

        input: {
            width: "100%",
            marginTop: 4,
            padding: "8px 12px",
            border: "1px solid #ddd",
            borderRadius: 6,
            fontSize: 12,
            fontFamily: "'Courier New', monospace",
            backgroundColor: "#f8f9fa",
        },

        select: {
            width: "100%",
            marginTop: 4,
            padding: "8px 12px",
            border: "1px solid #ddd",
            borderRadius: 6,
            fontSize: 12,
            fontFamily: "'Courier New', monospace",
            backgroundColor: "#f8f9fa",
        },

        textarea: {
            width: "100%",
            minHeight: 80,
            marginTop: 4,
            resize: "vertical",
            padding: "8px 12px",
            border: "1px solid #ddd",
            borderRadius: 6,
            fontSize: 12,
            fontFamily: "'Courier New', monospace",
            backgroundColor: "#f8f9fa",
            borderLeft: "1px solid #e5e5e5",
            overflow: "hidden",  // hides scrollbar
        },
    };

    //sidebar added
    const sidebarItems = sidebarConfig?.extractor ? sidebarConfig.extractor(text) : sidebarConfig?.items || [];

    return (
        <div
            style={{
                ...defaultStyles.container,
                ...styles.container,
                cursor: "pointer",
                border: isActive ? "2px solid #667eea" : "2px solid #e0e0e0",
                transition: "all 0.2s ease",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {inputs.map((handle) => (
                <Handle
                    key={handle.id}
                    type="target"
                    position={Position.Left}
                    id={`${id}-${handle.id}`}
                    style={
                        {
                            ...handle.style,
                            background: isActive ? "#667eea" : "#999",
                            width: 12,
                            height: 12,
                            border: "2px solid #fff",
                            transition: "background 0.2s ease",
                        }
                    }
                />
            ))}

            <div
                style={{
                    ...defaultStyles.title,
                    ...styles.title,
                    transition: "color 0.2s ease",
                    color: styles.title?.color || "#667eea",
                }}
            >
                {title}
            </div>

            {nameConfig && (
                <label
                    style={{
                        ...defaultStyles.label,
                        ...styles.label,
                        transition: "color 0.2s ease",
                        color: "#333",
                    }}
                >
                    {nameConfig.label}

                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                            ...defaultStyles.input,
                            ...styles.input,
                            transition: "all 0.2s ease",
                        }}
                    />
                </label>
            )}

            {selectConfig && (
                <label
                    style={{
                        ...defaultStyles.label,
                        ...styles.label,
                        transition: "color 0.2s ease",
                        color: "#333",
                    }}
                >
                    {selectConfig.label}

                    <select
                        value={selectValue}
                        onChange={(e) =>
                            setSelectValue(e.target.value)}
                        style={{
                            ...defaultStyles.select,
                            ...styles.select,
                            transition: "all 0.2s ease",
                        }}
                    >
                        {selectConfig.options.map((option) => (
                            <option
                                key={option}
                                value={option}
                            >
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
            )}

            {textAreaConfig && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                    }}
                >
                    <div style={{ flex: 1 }}>
                        <label
                            style={{
                                ...defaultStyles.label,
                                ...styles.label,
                                color: "#333",
                            }}
                        >
                            {textAreaConfig.label}

                            <textarea
                                value={text}
                                onChange={(e) => {
                                    e.target.style.height = "auto";
                                    e.target.style.height = `${e.target.scrollHeight}px`;

                                    setText(e.target.value);

                                    textAreaConfig.onChange?.(
                                        e.target.value
                                    );
                                }}
                                style={{
                                    ...defaultStyles.textarea,
                                    ...styles.textarea,
                                }}
                            />
                        </label>
                    </div>

                    {sidebarConfig && (
                        <div
                            style={{
                                ...defaultStyles.sidebar,
                                ...styles.sidebar,
                            }}
                        >
                            <div
                                style={{
                                    ...defaultStyles.sidebarTitle,
                                    ...styles.sidebarTitle,
                                }}
                            >
                                {sidebarConfig.title}
                            </div>

                            {sidebarItems.length > 0 ? (
                                sidebarItems.map((item) => (
                                    <div
                                        key={item}
                                        style={{
                                            ...defaultStyles.sidebarItem,
                                            ...styles.sidebarItem,
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))
                            ) : (
                                <div
                                    style={{
                                        fontSize: 11,
                                        opacity: 0.6,
                                    }}
                                >
                                    None
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {children}

            {outputs.map((handle) => (
                <Handle
                    key={handle.id}
                    type="source"
                    position={Position.Right}
                    id={`${id}-${handle.id}`}
                    style={
                        {
                            ...handle.style,
                            background: isActive ? "#667eea" : "#999",
                            width: 12,
                            height: 12,
                            border: "2px solid #fff",
                            transition: "background 0.2s ease",
                        }
                    }
                />
            ))}
        </div>
    );
};