import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

export default function Avatars(nome) {
  return (
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        {nome.nome.slice(0,1)}
      </Avatar>
  );
}