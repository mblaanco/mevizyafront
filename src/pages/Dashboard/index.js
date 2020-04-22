import React, { useState, useMemo, useEffect } from 'react';
import api from '~/services/api';

import { Container, List } from './styles';

const range = [
  8,9,10,11,12,13,14,15
];

export default function Dashbord() {
  const [ files, setFiles ] = useState([]);

  useEffect(() => {
    async function loadFiles() {
      const response = await api.get('files');
      console.tron.log(response.data);
      setFiles(response.data);
    }

    loadFiles();
  }, []);
  return (
    <Container>
      <header>
        <button>Carregar Listas</button>
      </header>

      <ul>
        {files.map(file => (
          <List key={file.id}>
          <strong>{file.name}</strong>
          <span>{//file.content
          // .split('')
          // .forEach(function(c) { c.print() })
        }
          </span>
        </List>
        ))}
        
      </ul>

    </Container>
        
  );
}
