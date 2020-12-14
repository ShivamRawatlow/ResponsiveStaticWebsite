import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/theme';
import { viContext } from '../context/value_index_context';
import Routing from './routing';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <viContext.Provider
        value={{
          activeIndex: activeIndex,
          setActiveIndex: setActiveIndex,
          selectedIndex,
          setSelectedIndex,
        }}
      >
        <Routing />
      </viContext.Provider>
    </ThemeProvider>
  );
};

export default App;
