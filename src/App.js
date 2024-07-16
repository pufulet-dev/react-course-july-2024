import React, { useState } from "react";
import SimpleExercises from "./SimpleExercises";
import SimpleToDoList from "./SimpleToDoList";
import TabList from "./TabList";

// const languages = ['JavaScript', 'PHP', 'Ruby', 'C#'];

function App() {
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
}

export default App;
