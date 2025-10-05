import React, { useState } from 'react';
// import ExploreMenu from '../ExploreMenu/ExploreMenu';
import Menu from './Menu';


const MenuPage = () => {
    const [category] = useState("All");
    return (
      <div>
        {/* <ExploreMenu category={category} setCategory={setCategory} /> */}
        <Menu category={category} />
      </div>
    );
};

export default MenuPage;