const mongoose = require('mongoose');
const model = mongoose.model('trip');



//GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    model
        .find({}) //empty filter for all
        .exec((err, trips)=> {
            if (!trips) {
                return res
                    .status(404)
                    .json({"message": "trip not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

//GET /trips/:tripCode - returns a single trip

const tripsFindByCode = async (req, res) => {
    model
        .find({'code': req.params.tripCode})
        .exec ((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({'message' : 'trip not found'});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip);
            }
        });
};

const getUser = (req, res, callback) => {
    if (req.payload && req.payload.email) {
        User
            .findOne({ email: req.payload.email })
            .exec((err, user) => {
                if (!user) {
                    return res
                        .status(404)
                        .json({ "message": "User not found" });
                } else if (err) {
                    console.log(err);
                    return res
                        .stauts(404)
                        .json(err);
                }
                callback(req, res, user.name);
            })
    } else {
        return res
            .status(404)
            .json({ "message": "User not found" });
    }
};

const tripsAddTrip = async (req, res) => {
        getUser(req, res,
            (req, res) => {
                Trip
                    .create({
                        code: req.body.code,
                        name: req.body.name,
                        length: req.body.length,
                        start: req.body.start,
                        resort: req.body.resort,
                        perPerson: req.body.perPerson,
                        image: req.body.image,
                        description: req.body.description
                    },
        (err, trip) => {
            if (err) {
                return res
                .status(400) // bad request
                .json(err);
            } else {
                return res
                .status(201) // created
                .json(trip);
            }
        });
    }
    );
}

const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    getUser(req, res,
        (req, res) => {
    Trip
        .findOneAndUpdate({ 'code': req.params.tripCode}, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, {new: true})
        .then(trip => {
            if (!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kid === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500)
                .json(err);
        })
    })
}
   

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};