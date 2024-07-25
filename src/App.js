import React, { useState, useEffect, useRef } from "react";
import SimpleExercises from "./SimpleExercises";
import SimpleToDoList from "./SimpleToDoList";
import TabList from "./TabList";
import RemovableItemList from "./RemovableItemList";
import RemovableItemList2 from "./RemovableItemList2";
import InputEditSaveExercise from './InputEditSaveExercise';
import SearchInput from "./SearchInput";
import CardNumberInput from "./CardNumberInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import TrackedTextarea from "./TrackedTextarea";
import LayoutEffectExample from "./LayoutEffectExample";
import MemoExercise from "./MemoExercise";
import ReducerPractice from "./ReducerPractice";

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



// can't be empty exercise

// function App() {  

//   const input = useRef();
//   const [displayError, setDisplayError] = useState(false);

//   function handleSubmit (e) {
//     e.preventDefault();
//     if (input.current.value !== "") {
//       setDisplayError(false);
//       alert("Submitted");
//     } else {
//       setDisplayError(true);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" ref={input}/>
//       { displayError && <span style={{color: "red",}}> Can't be empty! </span> }
//       <br />
//       <button> Submit </button>   
//     </form>
//   );
// }



// CARD NUMBER INPUT EXERCISE
// function App () {
//   return (
//     <CardNumberInput />
//   );
// }


// EMAIL INPUT EXERCISE
// function App () {
//   return (
//     <EmailInput
//       name="email"
//       label="Email:"
//       placeholder="e.g. alice@example.com"
//       style={{ backgroundColor: "white" }}
//     />
//   );
// }


// // PASSWORD INPUT EXERCISE
// function App () {
//   return (
//     <PasswordInput 
//       interactive={true}  // containing or not a strength indicator
//       value="Hello123?"
//       placeholder="type here..."
//     />
//   );
// }


// TRACKED TEXTAREA EXERCISE:
// function App () {
//   return (
//     <TrackedTextarea length={200} value="Type smth here..." />
//   );
// }


// LAYOUT EFFECT EXAMPLE:
// function App () {
//   return (
//     <LayoutEffectExample />
//   );
// }


// USE MEMO EXERCISE
// function App () {
//   return (
//     <MemoExercise list={["Python", "PHP", "JavaScript", "Perl", "Phaser", "Parrot", "ASP.net", "C#", "C", "C++"]} />
//   );
// }


// REDUCER PRACTICE
function App () {
  return (
    <>
      <ReducerPractice />
    </>
  );
}

export default App;