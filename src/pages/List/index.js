import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, Lista, Item } from './styles';

export default function List() {
  const list = useSelector((state) => state.list.list);
  const cleanedlist = list.content.replace(/[0-9]/g, '').split('\n');
  console.log(list);
  return (
    <Container>
      <div>
        <strong>{`Lista: ${list.name}`}</strong>
        <strong>{`Midia: ${list.midia}`}</strong>
        <strong>{`Data início: ${list.dt_fim ? list.dt_fim : 'nulo'}`}</strong>
        <strong>{`Data fim: ${list.dt_fim ? list.dt_fim : 'nulo'}`}</strong>
        <strong>
          {`Criada em: ${format(
            Date.parse(list.createdAt),
            "d 'de' MMM 'de' YYY 'às' HH':'mm'",
            { locale: pt }
          )}`}
        </strong>
        <strong>
          {`Modificada em: ${format(
            Date.parse(list.updatedAt),
            "d 'de' MMM 'de' YYY 'às' HH':'mm'",
            { locale: pt }
          )}`}
        </strong>
        <Lista bgcolor={list.bgcolor}>
          {cleanedlist.map((item, key) => (
            <Item
              key={key}
              tipoletra={list.tipo_letra}
              tamletra={list.tamanho_letra}
              corletra={list.cor_letra}
            >
              {`${item} `}{' '}
            </Item>
          ))}
        </Lista>
      </div>
    </Container>
  );
}
