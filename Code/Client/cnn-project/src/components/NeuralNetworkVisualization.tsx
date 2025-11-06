import { useState } from "react"


export default function NeuralNetworkVisualization() {
  const [hoveredNode, setHoveredNode] = useState(null);
  
  // Define network structure: [input layer, hidden layer 1, hidden layer 2, output layer]
  const layers = [3, 4, 4, 2];
  
  const width = 400;
  const height = 250;
  const nodeRadius = 10;
  const hoverRadius = 15;
  const layerSpacing = width / (layers.length + 1);
  
  // Generate node positions
  const nodes = [];
  layers.forEach((numNodes, layerIdx) => {
    const x = layerSpacing * (layerIdx + 1);
    const verticalSpacing = height / (numNodes + 1);
    
    for (let nodeIdx = 0; nodeIdx < numNodes; nodeIdx++) {
      const y = verticalSpacing * (nodeIdx + 1);
      nodes.push({
        id: `layer${layerIdx}-node${nodeIdx}`,
        x,
        y,
        layer: layerIdx,
        index: nodeIdx
      });
    }
  });
  
  // Generate connections
  const connections = [];
  let currentNodeIdx = 0;
  
  for (let layerIdx = 0; layerIdx < layers.length - 1; layerIdx++) {
    const currentLayerSize = layers[layerIdx];
    const nextLayerSize = layers[layerIdx + 1];
    
    for (let i = 0; i < currentLayerSize; i++) {
      for (let j = 0; j < nextLayerSize; j++) {
        const fromNode = nodes[currentNodeIdx + i];
        const toNode = nodes[currentNodeIdx + currentLayerSize + j];
        connections.push({
          from: fromNode,
          to: toNode,
          weight: Math.random() * 2 - 1 // Random weight for visualization
        });
      }
    }
    currentNodeIdx += currentLayerSize;
  }
  
  
  return (
        <svg width={width} height={height} className="border border-slate-200 rounded">
          {/* Draw connections */}
          <g>
            {connections.map((conn, idx) => {
              const isHighlighted = 
                hoveredNode === conn.from.id || 
                hoveredNode === conn.to.id;
              
              return (
                <line
                  key={idx}
                  x1={conn.from.x}
                  y1={conn.from.y}
                  x2={conn.to.x}
                  y2={conn.to.y}
                  stroke={isHighlighted ? '#3b82f6' : '#cbd5e1'}
                  strokeWidth={isHighlighted ? 2 : 1}
                  opacity={isHighlighted ? 0.8 : 0.3}
                  style={{ transition: 'all 0.3s ease' }}
                />
              );
            })}
          </g>
          
          <g>
            {nodes.map((node) => {
              const isHovered = hoveredNode === node.id;
              const radius = isHovered ? hoverRadius : nodeRadius;
              
              return (
                <g key={node.id}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={radius}
                    fill={isHovered ? '#3b82f6' : '#60a5fa'}
                    stroke="#1e40af"
                    strokeWidth={2}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{ 
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </g>
              );
            })}
          </g>
        </svg>
  );
};
