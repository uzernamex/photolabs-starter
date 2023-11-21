import React from 'react';
// import PhotoListItem from './components/PhotoListItem';

import PhotoList from 'components/PhotoList';
import './App.scss';
// import "./styles/PhotoListItem.scss";

 const App = () => {
  <div className="App">
     {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
     <PhotoList/>
  </div>
 }

  // const photos = newArray(3);
  //   return (
  //     <div className="App">
  //       {photos.map((_, index) => (
  //          <PhotoListItem key={index} {...sampleDataForPhotoListItem}/>
  //         //  If the user has liked the photo;
  //         //  The Photographer name; and
  //         //  The Photographer profile image.
       
  //      ))}
       
  //     </div>
  //   );
  // };
  export default App; 