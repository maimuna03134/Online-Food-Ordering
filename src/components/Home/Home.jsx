import React, { Suspense, useState } from 'react';
import Header from '../Header/Header';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import Menu from '../Menu/Menu';



const Home = () => {

  const [category, setCategory] = useState('All');
    return (
      <div>
        <Header></Header>
        <ExploreMenu
          category={category}
          setCategory={setCategory}
        ></ExploreMenu>
        <Menu category={category}></Menu>
      </div>
    );
};

export default Home;