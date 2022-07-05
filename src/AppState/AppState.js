import React, { useState, useEffect } from 'react';
import AppNavigation from '../AppNavigation/AppNavigation';
import { AppState } from 'react-native-web';


export default function AppState() {
      const [allNotes, setAllNotes] = useState([{ noteId: 1, noteTitle: "First Idea", noteText: 'First Note' }, { noteId: 2, noteTitle: 'Second Idea', noteText: 'Second Note' }]);
      const [note, setNote] = useState({});


      const AppState = {
            allNotes, setAllNotes,
            note, setNote
      };


      return (<AppNavigation AppState={{ AppState }} />)
};


