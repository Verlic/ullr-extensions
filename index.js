module.exports = {
  ciao: function(req, res) {
    return res.text('Ciao my friend! Talk to you later!').send();
  }
}
