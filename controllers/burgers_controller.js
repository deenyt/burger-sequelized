// Require dependencies
var express = require('express');
var db = require('../models');

// Export controller defined routes
module.exports = function(app) {
    // Get all burgers to be displayed
    app.get('/', function(request, response) {
        db.Burger.findAll({}).then(function(burgerData) {
            // Object to ship up to view
            var incomingBurgerDataObject = {
                    burgers: burgerData
                }
                // Ship it up
            response.render('index', incomingBurgerDataObject);
        }).catch(function(err) {
            console.log(err);
        });
    });

    // Post function to add new burger
    app.post('/', function(request, response) {
        var newBurger = request.body.burger;
        // if no burger is defined just return
        if (newBurger === '') {
            response.redirect('/');
            return;
        }
        // Create the new burger in DB
        db.Burger.create({
            burger_name: newBurger
        }).then(function() {
            response.redirect('/');
        }).catch(function(err) {
            console.log(err);
        });
    });

    // Update burger state in DB
    app.put('/:id', function(request, response) {
        // Update the burger
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: request.params.id
            }
        }).then(function() {
            response.redirect('/');
        }).catch(function(err) {
            console.log(err);
        });
    });
};