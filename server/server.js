const express = require('express')
const path = require('path')

// import ApolloServer
const { ApolloServer } = require('apollo-server-express')

// import typeDefs
const { typeDefs } = require('./schemas')

const PORT = process.env.PORT || 3001
const app = express()
const db = require('./config/connection')
const { authMiddleware } = require('./utils/auth')

const startServer = async () => {

  // create new apollo server
  const server = new ApolloServer({
    typeDefs,
    context: authMiddleware
  })

  // start apollo server
  await server.start()

  // integrate the apollo server with the express application as middleware
  server.applyMiddleware({ app })
}

// initialize apollo server
startServer()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// serve static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  })
})