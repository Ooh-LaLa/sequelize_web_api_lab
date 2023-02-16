const { Puppy } = require("../models")


const create = async (req, res) => {
  try {
    const puppy = await Puppy.create(req.body)
    res.status(200).json(puppy)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const puppies = await Puppy.findAll()
    res.status(200).json(puppies)
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports = {
  create,
  index,
}
