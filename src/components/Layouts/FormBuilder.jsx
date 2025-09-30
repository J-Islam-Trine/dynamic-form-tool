import React from 'react'

const FormBuilder = ({ fields, view, properties }) => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">{fields}</div>
            <div className="col-span-7">{view}</div>
            <div className="col-span-3">{properties}</div>
        </div>
    )
}

export default FormBuilder