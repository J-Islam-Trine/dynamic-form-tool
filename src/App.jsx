import './App.css'
import FieldProperties from './components/FormBuilder/FieldProperties'
import Fields from './components/FormBuilder/Fields'
import FormView from './components/FormBuilder/FormView'
import FormBuilder from './components/Layouts/FormBuilder'
import { FormBuilderField } from "./assets/data/FormBuilderField";

function App() {
  const buttonStyle='btn btn-outline btn-normal'


  return (
    <div className=' m-5'>
      <FormBuilder
        fields={<Fields
        fieldData={FormBuilderField}  buttonStyle={buttonStyle} />}
        view={<FormView />}
        properties={<FieldProperties />}
      />
    </div>
  )
}

export default App
