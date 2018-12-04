const User = require('../../models/User')
const buildingdata = require('../../models/buildings')

module.exports = (app) => {

    app.get('/api/buildingdata/:email', (req, res, next) => {
        let email = req.params.email.toLowerCase();
        User.findOne({email:email}).then((response)=>{
            res.json(response)
        }).catch((err)=>{
            res.json(err)
        })
      });


      app.post('/api/buildingdata/', function (req, res) {
        buildingdata.create(req.body).then((response)=>{
            res.json(response)
        })
      })


      
          //GET ALL buildings get route//
    app.get('/api/buildingdata/', function (req, res) {
        buildingdata.find(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

};