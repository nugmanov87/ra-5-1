import React from 'react';
import shortid from 'shortid';
import './App.css';

import Card from './components/Card';
import CardContent from './components/CardContent';
import CardImg from './components/CardImg';
import data from './data/cards';

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        {data.map(item => (
          <Card key={shortid.generate()}>
            {!!item.img ? <CardImg item={item} /> : null}
            <CardContent item={item} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
