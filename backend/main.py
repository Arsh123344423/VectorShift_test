from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
from collections import defaultdict, deque

app = FastAPI()

# Cors can be changed based on users needs
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Pipeline(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]


def is_dag(nodes, edges):
    graph = defaultdict(list)
    indegree = {node["id"]: 0 for node in nodes}

    for edge in edges:
        source = edge["source"]
        target = edge["target"]

        graph[source].append(target)
        indegree[target] += 1

    queue = deque(
        [node_id for node_id, degree in indegree.items() if degree == 0]
    )

    visited = 0

    while queue:
        current = queue.popleft()
        visited += 1

        for neighbor in graph[current]:
            indegree[neighbor] -= 1

            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return visited == len(nodes)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    print("\n========== PIPELINE RECEIVED ==========")

    print("\nNodes:")
    for node in nodes:
        print(node)

    print("\nEdges:")
    for edge in edges:
        print(edge)

    dag_status = is_dag(nodes, edges)

    print("\nSummary:")
    print(f"Number of Nodes: {len(nodes)}")
    print(f"Number of Edges: {len(edges)}")
    print(f"Is DAG: {dag_status}")

    print("=======================================\n")
    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": dag_status,
        "message": (
            "Valid DAG"
            if dag_status
            else "Cycle detected"
        )
    }