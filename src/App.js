import React, { useState } from "react";
import SimpleExercises from "./SimpleExercises";
import SimpleToDoList from "./SimpleToDoList";
import TabList from "./TabList";
import RemovableItemList from "./RemovableItemList";
import RemovableItemList2 from "./RemovableItemList2";
import InputEditSaveExercise from './InputEditSaveExercise';
import SearchInput from "./SearchInput";

// const languages = ['JavaScript', 'PHP', 'Ruby', 'C#'];

{/*function App() {
  //  return (
  //     <SimpleToDoList items={[
  //       "Learn JavaScript",
  //       "Read story book",
  //       "Watch documentary",
  //       "Bake cupcakes"]}/>
  //  );
  return (
    <div>
      <TabList
        labels={["Courses", "About", "Contact"]}
        panels={[<h1>Courses</h1>, <h1>About</h1>, <h1>Contact</h1>]}
        selected={1}
      />
    </div>
  );
} */}

// function App() {
//   return (
//      <RemovableItemList items={[
//         'Python',
//         'JavaScript',
//         'PHP',
//         'Dart'
//      ]} />
//   )
// }


// function App() {
//   return (
//      <RemovableItemList2 items={[
//         'Python',
//         'JavaScript',
//         'PHP',
//         'Dart'
//      ]}/>
//   );
// }

// function App () {
//   return (
//     <>
//       <InputEditSaveExercise />
//     </>
//   );
// }


// SEARCH INPUT EXERCISE

function App() {
  return (
     <SearchInput />
  );
}


export default App;