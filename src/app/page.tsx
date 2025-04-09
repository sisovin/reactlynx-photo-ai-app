import React from 'react';
import Card from '../components/Card';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <h1>Welcome to ReactLynx Photo AI App</h1>
      <Card title="Card Title" content="This is a card content." />
    </div>
  );
};

export default HomePage;
