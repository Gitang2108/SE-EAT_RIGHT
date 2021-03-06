const chai = require('chai');
var expect = require('chai').expect;

chai.use(require('chai-http'));

var request = require('request');

var should = require('should');

describe('Search By Tag Router test', function () {
    it('should return a list of restaurants which contain breakfast menus, are located in gainesville and are sorted rating wise in descending order', function () {
        var tag = "breakfast";
        var city = "gainesville";
        return chai
            .request('http://localhost:3000/restaurants')
            .post('/searchByTag')
            .send({
                "tag": tag,
                "city": city,
            })
            .then(function (res) {
                var i;
                var prevRating = 1000;
                for (i = 0; i < res.body.length; i = i + 1) {
                    expect(res.body[i]._source.city).to.equal(city);
                    var j;
                    var status = false;
                    for (j = 0; j < res.body[i]._source.tags.length; j++) {
                        if (res.body[i]._source.tags[j] == tag)
                            status = true;
                    }
                    expect(status).to.equal(true);
                    var rating = parseFloat(res.body[i]._source.rating.value)
                    expect(rating).to.not.be.above(prevRating);
                    prevRating = rating;
                }

            });
        done();
    });

    it('should return a list of restaurants which contain lunch menus,are located in gainesville and are sorted rating wise in descending order', function () {
        var tag = "lunch";
        var city = "gainesville";
        return chai
            .request('http://localhost:3000/restaurants')
            .post('/searchByTag')
            .send({
                "tag": tag,
                "city": city,
            })
            .then(function (res) {
                var i;
                var prevRating = 1000;
                for (i = 0; i < res.body.length; i = i + 1) {
                    expect(res.body[i]._source.city).to.equal(city);
                    var j;
                    var status = false;
                    for (j = 0; j < res.body[i]._source.tags.length; j++) {
                        if (res.body[i]._source.tags[j] == tag)
                            status = true;
                    }
                    expect(status).to.equal(true);
                    var rating = parseFloat(res.body[i]._source.rating.value)
                    expect(rating).to.not.be.above(prevRating);
                    prevRating = rating;
                }

            });
        done();
    });

    it('should return a list of restaurants which contain dinner menus, are located in gainesville and are sorted rating wise in descending order', function () {
        var tag = "dinner";
        var city = "gainesville";
        return chai
            .request('http://localhost:3000/restaurants')
            .post('/searchByTag')
            .send({
                "tag": tag,
                "city": city,
            })
            .then(function (res) {
                var i;
                var prevRating = 1000;
                for (i = 0; i < res.body.length; i = i + 1) {
                    expect(res.body[i]._source.city).to.equal(city);
                    var j;
                    var status = false;
                    for (j = 0; j < res.body[i]._source.tags.length; j++) {
                        if (res.body[i]._source.tags[j] == tag)
                            status = true;
                    }
                    expect(status).to.equal(true);
                    var rating = parseFloat(res.body[i]._source.rating.value)
                    expect(rating).to.not.be.above(prevRating);
                    prevRating = rating;
                }

            });
        done();
    });

    it('should return a list of restaurants which have delivery service, are located in gainesville and are sorted rating wise in descending order', function () {
        var tag = "delivery";
        var city = "gainesville";
        return chai
            .request('http://localhost:3000/restaurants')
            .post('/searchByTag')
            .send({
                "tag": tag,
                "city": city,
            })
            .then(function (res) {
                var i;
                var prevRating = 1000;
                for (i = 0; i < res.body.length; i = i + 1) {
                    expect(res.body[i]._source.city).to.equal(city);
                    var j;
                    var status = false;
                    for (j = 0; j < res.body[i]._source.tags.length; j++) {
                        if (res.body[i]._source.tags[j] == tag)
                            status = true;
                    }
                    expect(status).to.equal(true);
                    var rating = parseFloat(res.body[i]._source.rating.value)
                    expect(rating).to.not.be.above(prevRating);
                    prevRating = rating;
                }

            });
        done();
    });

    it('should return a list of restaurants which have take out option, are located in orlando and are sorted rating wise in descending order', function () {
        var tag = "take out";
        var city = "orlando";
        return chai
            .request('http://localhost:3000/restaurants')
            .post('/searchByTag')
            .send({
                "tag": tag,
                "city": city,
            })
            .then(function (res) {
                var i;
                var prevRating = 1000;
                for (i = 0; i < res.body.length; i = i + 1) {
                    expect(res.body[i]._source.city).to.equal(city);
                    var j;
                    var status = false;
                    for (j = 0; j < res.body[i]._source.tags.length; j++) {
                        if (res.body[i]._source.tags[j] == tag)
                            status = true;
                    }
                    expect(status).to.equal(true);
                    var rating = parseFloat(res.body[i]._source.rating.value)
                    expect(rating).to.not.be.above(prevRating);
                    prevRating = rating;
                }

            });
        done();
    });

    it('should return a list of restaurants which have "nightlife" tag,are located in gainesville and are sorted rating wise in descending order', function () {
        var tag = "nightlife";
        var city = "gainesville";
        return chai
            .request('http://localhost:3000/restaurants')
            .post('/searchByTag')
            .send({
                "tag": tag,
                "city": city,
            })
            .then(function (res) {
                var i;
                var prevRating = 1000;
                for (i = 0; i < res.body.length; i = i + 1) {
                    expect(res.body[i]._source.city).to.equal(city);
                    var j;
                    var status = false;
                    for (j = 0; j < res.body[i]._source.tags.length; j++) {
                        if (res.body[i]._source.tags[j] == tag)
                            status = true;
                    }
                    expect(status).to.equal(true);
                    var rating = parseFloat(res.body[i]._source.rating.value)
                    expect(rating).to.not.be.above(prevRating);
                    prevRating = rating;
                }

            });
        done();
    });
});
describe('Search Router test', function () {
    it('should first return restaurants whose name partialy/completely matches and then the restaurants whose menu matches but not the name, for search query blaze pizza', function () {
        var searchString = "blaze pizza";
        var city = "gainesville";
        return chai
            .request('http://localhost:3000/restaurants')
            .post('/search')
            .send({
                "search": searchString,
                "city": city,
            })
            .then(function (res) {
                var i;
                var permanentFalse = false;
                var status = false;
                var isMenuStart = false;
                for (i = 0; i < res.body.length; i = i + 1) {
                    expect(res.body[i]._source.city).to.equal(city);
                    var j;
                    if (!isMenuStart)
                        status = testRestaurantName(res.body[i]._source, searchString);

                    else {
                        var tempStatus = testRestaurantName(res.body[i]._source, searchString);
                        expect(tempStatus).to.equal(false);
                    }

                    if (status != true) {
                        status = testRestaurantMenu(res.body[i]._source, searchString);

                        if (status == false)
                            permanentFalse = true;

                        if (permanentFalse)
                            expect(status).to.equal(false);

                        status = false;
                        isMenuStart = true;
                    }
                    else
                        expect(status).to.equal(true);
                }

            });
        done();
    });

    it('should first return restaurants whose name partialy/completely matches and then the restaurants whose menu matches but not the name, for search query pizza', function () {
        var searchString = "pizza";
        var city = "gainesville";
        return chai
            .request('http://localhost:3000/restaurants')
            .post('/search')
            .send({
                "search": searchString,
                "city": city,
            })
            .then(function (res) {
                var i;
                var permanentFalse = false;
                var status = false;
                var isMenuStart = false;
                for (i = 0; i < res.body.length; i = i + 1) {
                    expect(res.body[i]._source.city).to.equal(city);
                    var j;
                    if (!isMenuStart)
                        status = testRestaurantName(res.body[i]._source, searchString);

                    else {
                        var tempStatus = testRestaurantName(res.body[i]._source, searchString);
                        expect(tempStatus).to.equal(false);
                    }

                    if (status != true) {
                        status = testRestaurantMenu(res.body[i]._source, searchString);

                        if (status == false)
                            permanentFalse = true;

                        if (permanentFalse)
                            expect(status).to.equal(false);

                        status = false;
                        isMenuStart = true;
                    }
                    else
                        expect(status).to.equal(true);
                }

            });
        done();
    });

    it('should return all restaurants in gainesville sorted in descending order rating wise when the restaurant name search box is empty', function () {
        var city = "gainesville";
        return chai
            .request('http://localhost:3000/restaurants')
            .post('/search')
            .send({
                "city": city,
            })
            .then(function (res) {
                var i;
                var prevRating = 1000;
                for (i = 0; i < res.body.length; i = i + 1) {
                    expect(res.body[i]._source.city).to.equal(city);
                    var rating = parseFloat(res.body[i]._source.rating.value)
                    expect(rating).to.not.be.above(prevRating);
                    prevRating = rating;
                }
            });
        done();
    });
});

describe('Search by Location Router test', function () {
    it('should first return restaurants whose name partialy/completely matches and then the restaurants whose menu matches but not the name and all the restaurants should be within 25km from the geo-location, for search query pizza', function () {
        var searchString = "pizza";
        var location = "29.617976, -82.383637";
        return chai
            .request('http://localhost:3000/restaurants')
            .post('/searchByLocation')
            .send({
                "search": searchString,
                "location": location,
            })
            .then(function (res) {
                var i;
                var permanentFalse = false;
                var status = false;
                var isMenuStart = false;
                for (i = 0; i < res.body.length; i = i + 1) {
                    expect(calculateDistance(res.body[i]._source.location, location)).to.not.be.above(25);
                    var j;
                    if (!isMenuStart)
                        status = testRestaurantName(res.body[i]._source, searchString);

                    else {
                        var tempStatus = testRestaurantName(res.body[i]._source, searchString);
                        expect(tempStatus).to.equal(false);
                    }

                    if (status != true) {
                        status = testRestaurantMenu(res.body[i]._source, searchString);
                        if (status == false)
                            permanentFalse = true;

                        if (permanentFalse)
                            expect(status).to.equal(false);

                        status = false;
                        isMenuStart = true;
                    }
                    else
                        expect(status).to.equal(true);
                }

            });
        done();
    });

    it('should return all restaurants within 25km of geo-location sorted in descending order rating wise when the restaurant name search box is empty', function () {
        var location = "29.617976, -82.383637";
        return chai
            .request('http://localhost:3000/restaurants')
            .post('/searchByLocation')
            .send({
                "location": location,
            })
            .then(function (res) {
                var i;
                var prevRating = 1000;
                for (i = 0; i < res.body.length; i = i + 1) {
                    expect(calculateDistance(res.body[i]._source.location, location)).to.not.be.above(25);
                    var rating = parseFloat(res.body[i]._source.rating.value)
                    expect(rating).to.not.be.above(prevRating);
                    prevRating = rating;
                }
            });
        done();
    });
});

//tests whether the restaurant name contains or matches with query 
function testRestaurantName(res, query) {
    var queryA = query.split(" ");
    var targetA = res.name.toLowerCase();

    //var status = false;
    var i;
    for (i = 0; i < queryA.length; i++) {
        if (targetA.indexOf(queryA[i]) > -1)
            return true;
    }
    return false;
}


//tests whether the restaurant menu contains or matches with query 
function testRestaurantMenu(res, query) {
    var queryA = query.split(" ");
    var targetIntermediate = res.menu;
    //var status = false;
    var i, m;
    for (m = 0; m < targetIntermediate.length; m++) {
        var targetA = targetIntermediate[m].toLowerCase();

        for (i = 0; i < queryA.length; i++) {
            if (targetA.indexOf(queryA[i]) > -1)
                return true;
        }
    }
    return false;
}

//calculates distance between 2 geo-locations a and b
function calculateDistance(a, b) {
    var ss1 = a.split(",");
    var lat1 = parseFloat(ss1[0]);
    var lon1 = parseFloat(ss1[1]);

    var ss2 = b.split(",");
    var lat2 = parseFloat(ss2[0]);
    var lon2 = parseFloat(ss2[1]);

    return getDistanceFromLatLonIn(lat1, lon1, lat2, lon2);
}

function getDistanceFromLatLonIn(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km

    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}



