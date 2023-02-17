const { Puppy, DogPark } = require("../models")


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
    const puppies = await Puppy.findAll({
      include: [{ model: DogPark, as: "dogparks" }],
    })
    res.status(200).json(puppies)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


const update = async (req, res) => {
  try {
    const puppy = await Puppy.update(
      req.body,
      { where: { id: req.params.id }, returning: true }
    )
    res.status(200).json(puppy)
  } catch (error) {
    res.status(500).json(error)
  }
}

/*const deleteCat = async (req, res) => {
  try {
    // Calling destroy on the model will not return the deleted record!
    const numberOfRowsRemoved = await Cat.destroy(
      { where: { id: req.params.id } }
    )
    res.status(200).json(numberOfRowsRemoved) // Expected: 1
  } catch (error) {
    res.status(500).json(error)
  }
}*/

const deletePuppy = async (req, res) => {
  try {
    // Calling destroy on the model will not return the deleted record! Destroy on an instance:
      const puppy = await Puppy.findByPk(req.params.id)
      await puppy.destroy()
      res.status(200).json(puppy)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addDogPark = async (req, res) => {
  try {
    // Append a catId to req.body:
    req.body.puppyId = req.params.id
    const dogPark = await DogPark.create(req.body)
    res.status(200).json(dogPark)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deletePuppy,
  addDogPark,
}



