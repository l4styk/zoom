

function getEvents(res) {
  events.find(function (err, events){
    if (err) {
            res.send(err);
        }

        res.json(todos);
  });
};

module.exports = function (app) {
  app.get('/events', function(req, res) {
    getEvents(res);
  })
  app.get('*', function (req, res) {
       res.sendFile(__dirname + '/public/index.html');
   });
}
