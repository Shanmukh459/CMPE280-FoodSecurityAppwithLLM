import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Arrow from '@mui/icons-material/NoteAltOutlined';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Annotation = ({ currentPage }) => {
  const [newAnnotation, setNewAnnotation] = useState('');
  const [annotations, setAnnotations] = useState([]);

  // Load annotations from local storage when the component mounts
  useEffect(() => {
    const storedAnnotations = localStorage.getItem(`annotations_${currentPage}`);
    if (storedAnnotations) {
      setAnnotations(JSON.parse(storedAnnotations));
    }
  }, [currentPage]);

  const addAnnotation = (newAnnotation) => {
    if (newAnnotation.trim() !== '') {
      const updatedAnnotations = [...annotations, newAnnotation];
      setAnnotations(updatedAnnotations);
      localStorage.setItem(`annotations_${currentPage}`, JSON.stringify(updatedAnnotations));
    }
  };

  return (
    <>
    <label style={{ "font-weight": "bold" }}>Annotations</label>
      <List>
        {annotations.map((p, index) => (
          <ListItem key={index}>
            <ListItemIcon size="sm">
              <Arrow />
            </ListItemIcon>
            <ListItemText fontSize="12" primary={p} secondary={''} />
          </ListItem>
        ))}
      </List>
      <TextField
        id="outlined-textarea"
        label="Annotation"
        placeholder="Annotation"
        size="small"
        multiline
        value={newAnnotation}
        onChange={(e) => setNewAnnotation(e.target.value)}
      />
      <div>&nbsp;</div>
      <Button variant="contained" onClick={() => addAnnotation(newAnnotation)}>
        + Add Annotation
      </Button>
    </>
  );
};

export default Annotation;
