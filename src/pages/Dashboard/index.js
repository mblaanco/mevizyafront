import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '~/services/api';
import { loadListRequest } from '~/store/modules/list/actions';

import { Container, List } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15];

export default function Dashbord() {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);

  function handleSubmit(file_id) {
    dispatch(loadListRequest(file_id));
  }
  useEffect(() => {
    async function loadFiles(data) {
      const response = await api.get('files');
      console.tron.log(response.data);
      setFiles(response.data);
    }

    loadFiles();
  }, []);

  return (
    <Container>
      <ul>
        {files.map((file) => (
          <List key={file.id}>
            <strong>{file.name}</strong>

            <button type="button" onClick={(e) => handleSubmit(file.id)}>
              Ver lista.
            </button>
            <span>
              {
                // file.content
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
