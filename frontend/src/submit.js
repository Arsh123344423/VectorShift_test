import './index.css';
import { useStore } from './store';
import { useState } from "react";

export const SubmitButton = () => {
  const [result, setResult] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    const { nodes, edges } = useStore.getState();

    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      const data = await response.json();

      console.log(data);
      setResult(data);
      setOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="submit-button-container">
        <button
          className="submit-button"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {open && result && (
        <div
          className="modal-overlay"
          onClick={() => setOpen(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Pipeline Analysis</h2>

            <p>
              <strong>Nodes:</strong>{" "}
              {result.num_nodes}
            </p>

            <p>
              <strong>Edges:</strong>{" "}
              {result.num_edges}
            </p>

            <p>
              <strong>DAG:</strong>{" "}
              {result.is_dag ? "Yes" : "No"}
            </p>


            <button
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};