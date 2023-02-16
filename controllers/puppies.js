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

    const puppy = await Puppy.findByPk(req.params.id)
    puppy.set(req.body)
    await puppy.save()

    res.status(200).json(puppy)
  } catch (error) {
    res.status(500).json(error)
  }
}


const update = async (req, res) => {
  try {
    const puppy = await Puppy.update(
      req.body,
      { where: { id: req.params.id }, returning: true }
    )
    res.status(200).json(cat)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
}



