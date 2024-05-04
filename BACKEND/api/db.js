const conn = require('./connection')

async function getAllCharacters() {
  try {
    const [rows] = await conn.query('SELECT * FROM characters')
    return rows
  } catch (e) {
    return e
  }
}

async function getOneCharacter(characterID) {
  try {
    const [rows] = await conn.query(`SELECT * FROM characters WHERE id_character = ${characterID}`)
    return rows
  } catch (e) {
    return e
  }
}

async function createCharacter(name, description, img) {
  try {
    const [result] = await conn.query(`INSERT INTO characters (name_character, description_character, img_character) 
    VALUES ('${name}', '${description}', '${img}')`)
    return result
  } catch (e) {
    return e
  }
}

async function deleteCharacter(characterID) {
  try {
    const [result] = await conn.query(`Delete from characters where id_character = ${characterID}`)
    return result
  } catch (e) {
    return e
  }
}

async function updateCharacter(nameCharacter, descriptionCharacter, imgCharacter, characterID) {
  try {
    const [result] = await conn.query(`UPDATE characters SET name_character = '${nameCharacter}', 
    description_character = '${descriptionCharacter}', img_character = '${imgCharacter}' WHERE id_character = ${characterID}`)
    return result
  } catch (e) {
    return e
  }
}

async function getAllObjects() {
  try {
    const [rows] = await conn.query('select * from objects')
    return rows
  } catch (e) {
    return e
  }
}

async function createObject(name, img, desc) {
  try {
    const [result] = await conn.query(`INSERT INTO objects (name_object, img_object, description_object) 
    VALUES ('${name}', '${img}', '${desc}')`)
    return result
  } catch (e) {
    return e
  }
}

async function getOneObject(objectID) {
  try {
    const [rows] = await conn.query(`select * from objects where id_object = ${objectID}`)
    return rows
  } catch (e) {
    return e
  }
}

async function updateObject(nameObject, descriptionObject, imgObject, objectID) {
  try {
    const [result] = await conn.query(`UPDATE objects SET name_object = '${nameObject}', 
    description_object = '${descriptionObject}', img_object = '${imgObject}' WHERE id_object = ${objectID}`)
    return result
  } catch (e) {
    return e
  }
}

async function deleteObject(objectID) {
  try {
    const [result] = await conn.query(`Delete from objects where id_object = ${objectID}`)
    return result
  } catch (e) {
    return e
  }
}

async function getAllGmaes() {
  try {
    const [result] = await conn.query('SELECT * FROM games')
    return result
  } catch (e) {
    return e
  }
}

async function getOneGame(gameID) {
  try {
    const [rows] = await conn.query(`SELECT * FROM games where id_game = ${gameID}`)
    return rows
  } catch (e) {
    return e
  }
}

async function postGame(name, img, desc, date) {
  try {
    const [result] = await conn.query(`insert into games 
    (name_game, img_game,date_released_game,content_games)
    values ('${name}', '${img}','${date}' ,'${desc}')`)
    return result
  } catch (e) {
    return e
  }
}

async function updateGame(nameGame, imgGame, descriptionGame, dateGame, gameID) {
  try {
    const [result] = await conn.query(`update games set name_game = '${nameGame}',
    img_game = '${imgGame}', date_released_game = '${dateGame}', content_games = '${descriptionGame}'
    where id_game = ${gameID}`)
    return result
  } catch (e) {
    return e
  }
}

async function deleteGame(gameID) {
  try {
    const [result] = await conn.query(`Delete from games where id_game = ${gameID}`)
    return result
  } catch (e) {
    return e
  }
}

module.exports = {
  getAllCharacters,
  createCharacter,
  getOneCharacter,
  deleteCharacter,
  updateCharacter,
  getAllObjects,
  createObject,
  getOneObject,
  updateObject,
  deleteObject,
  getAllGmaes,
  getOneGame,
  postGame,
  updateGame,
  deleteGame,
}
