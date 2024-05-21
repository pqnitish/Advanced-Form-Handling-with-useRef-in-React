import './App.css'
import DynamicFormInputFocus from './components/DynamicFormInputFocus'
import RealTimeFormValidation from './components/RealTimeFormValidation'
import CustomFormSubmission from './components/CustomFormSubmission'
function App() {

  return (
    <>
     <h1>Dynamic Form Handling With useRef</h1>
     <h2>Dynamic Form Input Focus</h2>
     <DynamicFormInputFocus/>
     <h2>Real-time Input Validation</h2>
     <RealTimeFormValidation/>
     
     <h2>Custom Form Submission Handling</h2>
     <CustomFormSubmission/>
    </>
  )
}

export default App
