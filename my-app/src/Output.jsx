import React from 'react';
import styled from 'styled-components';

const Output = ({ loading, error, output }) => {

    const segments = output.split(/(```[\s\S]*?```)/g);

    console.log(segments);

    const styledSegments = segments.map((segment, index) => {
        if (segment.startsWith("```") && segment.endsWith("```")) {
          const code = segment.slice(3, -3);
          return (
            <pre key={index} style={{ backgroundColor: "#0000008d", color: "white", padding : "10px", borderRAdius : "10px", fontSize : "15px", whiteSpace : "pre-wrap" }}>
              {code}
            </pre>
          );
        } else {
          return <span key={index}>{segment}</span>;
        }
      });
    

    
return (
    <Container>
      <h2>Output</h2>
      {loading && (<div>Loading...</div>)}
      {error && (<div>Error: {error}</div>)}
      <pre style = {{whiteSpace : "pre-wrap"}}>{styledSegments}</pre>
    </Container>
  );
};

const Container = styled.div`
  background-color: #222;
  color: #fff;
  padding: 20px;
  width : 50%;
`;
export default Output;
