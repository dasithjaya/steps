import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps/>
      <Steps/>
    </div>
  )
}

function Steps() {
  // const arr = useState(1);

  // after we can destructuring arr

  const [step, setStep] = useState(1);
  // console.log(arr)
  // const step = 1;
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(open => !open)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            {" "}
            Step {step} : {messages[step - 1]}{" "}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// function App() {

//   const [step, setStep] = useState(1);

//   function handlePrevious() {
//     if (step > 1) setStep(step - 1);
//   }

//   function handleNext() {
//     if (step < 3) setStep(step + 1)
//   }

//   return (
//     <div className="steps">
//       <div className="numbers">
//         <div className={step >= 1 ? "active" : "" }>1</div>
//         <div className={step >= 2 ? "active" : "" }>2</div>
//         <div className={step >= 3 ? "active" : "" }>3</div>
//       </div>

//       <p className="message">
//         {
//           `Step ${step} : ${messages[step - 1]} `
//         }
//       </p>

//       <div className="buttons">
//         <button
//           style={{ backgroundColor: "#7950f2", color: "#fff" }}
//           onClick={handlePrevious}
//           className="previous"
//         >
//           Previous
//         </button>
//         <button
//           style={{ backgroundColor: "#7950f2", color: "#fff" }}
//           onClick={handleNext}
//           className="next"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
