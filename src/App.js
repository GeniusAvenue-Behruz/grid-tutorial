import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  const topics = [
    { title: 'Introduction', file: './tutorials/introduction.html' },
    { title: 'Setup', file: 'tutorials/setup.html' },
    { title: 'Components', file: 'tutorials/components.html' },
    { title: 'State & Props', file: 'tutorials/state-and-props.html' },
    { title: 'Routing', file: 'tutorials/routing.html' },
    { title: 'Styling', file: 'tutorials/styling.html' },
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <div className="flex h-screen">
      <Sidebar topics={topics} selectTopic={setSelectedTopic} />
      <MainContent selectedTopic={selectedTopic} />
    </div>
  );
};

export default App;
