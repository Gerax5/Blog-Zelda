const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const jwt = require('jsonwebtoken')

const app = express()
const port = 3005
const logStream = fs.createWriteStream('./log.txt', { flags: 'a' })

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms', { stream: logStream }),
)

const {
  validateDataPostCharacters,
  validateDataUpdateCharacters, validateDataPostObject,
  validateDataUpdateObject,
  formatDate,
} = require('./functions')

const {
  getAllCharacters, createCharacter,
  getOneCharacter, deleteCharacter, updateCharacter,
  getAllObjects, createObject, getOneObject, updateObject,
  deleteObject, getAllGmaes, getOneGame, postGame,
  updateGame, deleteGame,
} = require('./db')

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
/* console.log(`Server listening at http://127.0.0.1:${port}`) */
})

/* Character */
app.post('/character', validateDataPostCharacters, async (req, res) => {
  try {
    const [nameCharacter,
      descriptionCharacter,
      imgCharacter] = [req.body.name, req.body.description, req.body.img]
    const messages = await createCharacter(nameCharacter, descriptionCharacter, imgCharacter)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error in character creation' })
  }
})

app.get('/character', async (req, res) => {
  try {
    const messages = await getAllCharacters()
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error retrieving the characters' })
  }
})

app.get('/character/:characterID', async (req, res) => {
  try {
    const { characterID } = req.params
    const messages = await getOneCharacter(characterID)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error retrieving the character' })
  }
})

app.delete('/character/:characterID', async (req, res) => {
  try {
    const { characterID } = req.params
    const messages = await deleteCharacter(characterID)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error deleting the character' })
  }
})

app.put('/character/:characterID', validateDataUpdateCharacters, async (req, res) => {
  try {
    const { characterID } = req.params
    const [nameCharacter,
      descriptionCharacter,
      imgCharacter] = [req.body.name, req.body.description, req.body.img]
    const messages = await updateCharacter(
      nameCharacter,
      descriptionCharacter,
      imgCharacter,
      characterID,
    )
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error updating the character' })
  }
})

/* Object */
app.get('/object', async (req, res) => {
  try {
    const messages = await getAllObjects()
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error retrieving the object' })
  }
})

app.post('/object', validateDataPostObject, async (req, res) => {
  try {
    const [nameObject,
      imgObject,
      descriptionObject] = [req.body.name, req.body.img, req.body.description]
    const messages = await createObject(nameObject, imgObject, descriptionObject)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error in object creation' })
  }
})

app.get('/object/:objectID', async (req, res) => {
  try {
    const { objectID } = req.params
    const messages = await getOneObject(objectID)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error retrieving the character' })
  }
})

app.put('/object/:objectID', validateDataUpdateObject, async (req, res) => {
  const id = req.params.objectID
  try {
    const [nameObject,
      descriptionObject,
      imgObject] = [req.body.name, req.body.description, req.body.img]
    const messages = await updateObject(nameObject, descriptionObject, imgObject, id)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error updating the character' })
  }
})

app.delete('/object/:objectID', async (req, res) => {
  const id = req.params.objectID
  try {
    const messages = await deleteObject(id)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error updating the character' })
  }
})

app.get('/games', async (req, res) => {
  try {
    const games = await getAllGmaes()
    const modifyGames = games.map((game) => ({
      id_game: game.id_game,
      name_game: game.name_game,
      img_game: game.img_game,
      date_released_game: formatDate(game.date_released_game),
      content_games: game.content_games,
    }))
    res.status(200).json(modifyGames)
  } catch (error) {
    res.status(500).json({ message: 'error retrieving the object' })
  }
})

app.get('/games/:gameID', async (req, res) => {
  try {
    const { gameID } = req.params
    const games = await getOneGame(gameID)
    const modifyGames = games.map((game) => ({
      id_game: game.id_game,
      name_game: game.name_game,
      img_game: game.img_game,
      date_released_game: formatDate(game.date_released_game),
      content_games: game.content_games,
    }))
    res.status(200).json(modifyGames)
  } catch (error) {
    res.status(500).json({ message: 'error retrieving the object' })
  }
})

app.post('/games', async (req, res) => {
  try {
    const [nameGame,
      imgGame,
      descriptionGame,
      dateGame] = [req.body.name, req.body.img, req.body.description, req.body.dateRelease]
    const messages = await postGame(nameGame, imgGame, descriptionGame, dateGame)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error posting the game' })
  }
})

app.put('/games/:gameID', async (req, res) => {
  const { gameID } = req.params
  try {
    const [nameGame,
      imgGame,
      descriptionGame,
      dateGame] = [req.body.name, req.body.img, req.body.description, req.body.dateRelease]
    const messages = await updateGame(nameGame, imgGame, descriptionGame, dateGame, gameID)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error posting the game' })
  }
})

app.delete('/games/:gameID', async (req, res) => {
  const { gameID } = req.params
  try {
    const messages = await deleteGame(gameID)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error updating the character' })
  }
})

const secretKey = 'Papas con queso y tocino'

app.post('/login', (req, res) => {
  const { username, password } = req.body

  if (username === 'admin' && password === '12345') {
    const token = jwt.sign({ userId: 1 }, secretKey, { expiresIn: '1h' })
    res.send({ token })
  } else {
    res.status(401).send({ error: 'Credenciales incorrectas' })
  }
})

// eslint-disable-next-line consistent-return
const verificarToken = (req, res, next) => {
  if (req.path !== '/login') {
    const token = req.headers.authorization?.split(' ')[1]
    if (token) {
      // eslint-disable-next-line consistent-return
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Token inválido' })
        }
        req.usuario = decoded
        next()
      })
    } else {
      return res.status(403).json({ message: 'Se requiere un token de autenticación' })
    }
  } else {
    next()
  }
}

app.use(verificarToken)

app.use((req, res) => {
  res.status(400).send('no endpoint was found')
})

app.use((err, req, res) => {
  res.status(500).send('Hubo un problema con la conexión a la base de datos o un error de código')
})

/* games */

/*
id_character INT AUTO_INCREMENT PRIMARY KEY,
    name_character VARCHAR(255) NOT NULL,
    description_character VARCHAR(255) NOT NULL,
    img_character VARCHAR(255) NOT NULL
*/
