import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer/Footer';

export default function Profile(props) {
  return (
    <div>
      <Header { ...props } title="Profile" dontShowSearchIcon />
      <Footer />
    </div>
  );
}
