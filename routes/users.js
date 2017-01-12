module.exports = (app, router, User) => {
  router.get('/user/:_id', (req, res, next) => {
    // HTTP GET localhost:8080/api/v1/trip/all
    const promise = User.findOne({'profileID': req.params._id})
    promise.then((doc) => {
      res.json(doc)
    }).catch((err) => {
      res.json(err)
    })
  })

  app.use('/api/v1', router)
}
