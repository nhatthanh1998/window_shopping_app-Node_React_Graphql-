const passport = require('passport')
module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
  }))

  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/dashboard')
    })

  app.get('/auth/facebook',
    passport.authenticate('facebook'))

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/dashboard')
  })
  app.get('/auth/logout',(req,res)=>{
    req.logout()
    res.redirect('/')
  })
}