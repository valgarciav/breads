//calling react
const React = require('react')


function Default(html) {
  return ( // add html syntax. we are importing it and showing how we are returning it. passing html as a parameter
    <html>
    <head>
    <link rel="stylesheet" href="/main.css" />
    </head>
    <body>
  <div className="wrapper">
    <header>
      <h1><a href="/Breads">BreadCRUD</a></h1>
    </header>
    <div className="container">
      {html.children}
    </div>
  </div>
</body>

    </html>
  )
}

module.exports = Default


