import React, { useState } from 'react';
import styled from 'styled-components';
import TextEditor from './TextEditor';
import Output from './Output';

const languages = ['Python', 'C#', 'JavaScript', 'Java', 'Ruby', 'Go', 'Rust', 'Swift', 'PHP', 'TypeScript', 'C++', 'HTML', 'CSS', 'Kotlin', 'Perl', 'Scala', 'Objective-C', 'Shell', 'SQL'];

const LanguageSelector = () => {

  const [language, setLanguage] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [output, setOutput] = useState('');

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    setLanguage(e.target.value);
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleConvert = async () => {
    setLoading(true);
    setError(null);

    console.log(code)
  
    try {
      const response = await fetch("https://code-checker-dcv9.onrender.com/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          code: code,
          language : language 
        })
      });
  
      const data = await response.json();
      setOutput(data.convertedCode);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };



  const handleDebug = async () => {

    setLoading(true);
    setError(null);

    console.log(code)

    try {
      const response = await fetch("https://code-checker-dcv9.onrender.com/debug", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          code: code,
        })
      });
  
      const data = await response.json();
      setOutput(data.debugResult);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }


  const handleQualityCheck = async () => {

    setLoading(true);
    setError(null);

    console.log(code)

    try {
      const response = await fetch("https://code-checker-dcv9.onrender.com/qualitycheck", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          code: code,
        })
      });
  
      const data = await response.json();
      setOutput(data.qualityCheckResult);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <Container>
      <Select value={language} onChange={handleLanguageChange}>
        <option value="">Select a programming language</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </Select>
      <Button onClick={handleConvert}>Convert</Button>
      <Button onClick={handleDebug}>Debug</Button>
      <Button onClick={handleQualityCheck}>Quality check</Button>
    </Container>
    
    <EditorContainer>
        <TextEditor code = {code} onChange={handleCodeChange}/>
        <Output loading={loading} error={error} output={output} />
      </EditorContainer>
    </>
  );
};


const EditorContainer = styled.div`
    display: flex;
    height : 89vh;
    gap : 10px;
    border : 1px solid;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #222;
  padding: 20px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #333;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #444;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;

export default LanguageSelector;
