import { useEffect, useState } from "react";
import { getAllDiaries } from "./diaryService";
import { DiaryEntry } from "./types";
import Diaries from "./components/Diaries";
import NewDiaryEntryForm from "./components/NewDiaryEntryForm";
import ErrorNotification from "./components/ErrorNotification";

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getAllDiaries().then(data => setEntries(data));
  });

  const addDiaryEntry = ((entryToAdd : DiaryEntry) => {
    setEntries(entries.concat(entryToAdd));
  });

  const updateErrorMessage = (message : string) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(""), 5000);
  };

  return (
    <div>
      <ErrorNotification message={errorMessage} />
      <NewDiaryEntryForm addDiaryEntry={addDiaryEntry} errorMessageHandler={updateErrorMessage}/>
      <br/>
      <Diaries diaries={entries}/>
    </div>
  );
};

export default App;