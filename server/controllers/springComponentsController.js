const SpringComponent = require('../models/springComponentModel')
exports.get = async (req, res) => {
  const filter = req.query.filter
  const filteredData = filter
    ? (await SpringComponent.findAll()).filter((elem) =>
        elem.title.toLowerCase().includes(filter.toLowerCase())
      )
    : await SpringComponent.findAll()
  res.json(filteredData)
}
