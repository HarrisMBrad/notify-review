import React, { useState, useEffect } from 'react';
import AppNavigation from '../AppNavigation/AppNavigation';
import { App } from 'src/AppState/AppState';
import { AppState } from 'react-native-web';



export default function App(AppState) {
      const [allNotes, setAllNotes] = useState([{ noteId: 1, noteTitle: "First Idea", noteText: 'First Note' }, { noteId: 2, noteTitle: 'Second Idea', noteText: 'Second Note' }]);
      const [note, setNote] = useState({});
      const [allEffects, setEffectNotes] = useEffect({});

      const AppState = {
            allNotes, setAllNotes,
            note, setNote,
            allEffects,
            setEffectNotes
      };
      
      //(setAllNotes([{ "note": "Hello-Effecter" }].then + ) = useEffect({})); 
      // setAllNotes([{ "note": "Hello-Effect" }]) = useEffect({});

      return (<AppNavigation App={{ AppState }} />)
};


