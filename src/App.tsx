import React from 'react';

export const App: React.FC = () => (
  <div className="App">
    {/* Keep this input for tests */}
    <input type="text" />

    <p className="App__message">The last pressed key is [Enter]</p>
  </div>
);
