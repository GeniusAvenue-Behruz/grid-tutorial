import React, { useEffect, useState } from 'react';

const MainContent = ({ selectedTopic }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(selectedTopic.file)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [selectedTopic]);

  return (
    <div className="w-3/4 p-10 bg-gray-50">
      <div
        className="text-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default MainContent;
