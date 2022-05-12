const React = require('react')
const bread = require('../models/bread')
const Default = require('./default')

function Index({breads, title}) {
    return(
      <Default title={title}>
  <h2>Index Page</h2>
  {/* <p>I have {breads[0].name} bread!</p> */}
  {/* This is a JSX comment. */}
  <ul>
    { //.map() function takes a callback as an argument. The callback requires a minimum of one argument. The first is the item in the array we are iterating over. The second argument is optional and will be the index position of the array item.
    breads.map((bread, index)=> {
      return (
        <li key={index}>
          <a href={`/breads/${index}`}>
            {bread.name}
          </a>
        </li>
      )
    })
  }     
  </ul>
  <div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>

</Default>      
    )
}


module.exports = Index
 