import React from 'react';

export default ()=> {
      const [name, ] = React.useState("Krishna Teja");
      const [age, setAge] = React.useState(21);
  return (
    <div className="row">
      <div className="col">
        <h1>This is {name}'s page. He is {age} years old </h1>
        <input value={age} onChange={e=> setAge(e.currentTarget.value)} type="text" className="form-control" placeholder="Age" />
        <div className="progress">
          <div  className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: age + '%'}}></div>
        </div>
      </div>
    </div>
  )
}

