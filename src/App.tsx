import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import LanguageSelect from './languageSelect';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <LanguageSelect/>
      <div>
        <p>{t("hello_welcome_to_react")}</p>
        <p>{t("this_is_an_example")}</p>
      </div>
    </div>
  );
}

export default App;
