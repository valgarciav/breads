const React = require('react')
const Default = require('./default')

// make it so that users dont need to reenter in all the data. and update what they wish. pass data into the component and add values to each input
function Edit({bread, index}) {
    return (
      <Default>
        <h2>Edit a bread</h2>
        <form action={`/breads/${index}?_method=PUT`} method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={bread.name}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={bread.image}
          />
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked={bread.hasGluten}
          />
          <br />
          <input type="submit"/>
          <a href={`/breads/${index}/edit`}><button>Edit</button></a>
        </form>
      </Default>
    )
}


module.exports = Edit
