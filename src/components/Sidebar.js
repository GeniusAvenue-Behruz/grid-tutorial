import React from 'react';

const Sidebar = ({ topics, selectTopic }) => {
  return (
    <div className="w-1/4 bg-gradient-to-b from-gray-800 to-gray-600 text-white h-screen p-5 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Tutorial Topics</h2>
      <ul>
        {topics.map((topic, index) => (
          <li
            key={index}
            className="mb-2 p-2 rounded cursor-pointer hover:bg-gray-700"
            onClick={() => selectTopic(topic)}
          >
            {topic.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
