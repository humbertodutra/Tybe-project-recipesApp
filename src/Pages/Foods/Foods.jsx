import React, { useEffect, useContext } from 'react';
import Header from '../../Components/Header';
import MyContext from '../../context/MyContext';

export default function Foods() {
  const { searchOn } = useContext(MyContext);
  useEffect(() => {
    searchOn();
  }, [searchOn]);

  return (
    <div>
      <Header title="Foods" />
    </div>
  );
}
