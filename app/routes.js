var Nerd = require('./models/nerd');

    module.exports = function(app){
        // Server routes =========================
        // Handle API Calls
        // Authentication routes

        // API routes
        app.get('/api/nerds', function(req, res){
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, nerds){
                if(err)
                    res.send(err);
                res.json(nerds); // return all nerds in JSON format
            });
        });

        // routes for creating app.post

        // route for deleting app.delete

        //frontend routes ========================
            //route to handle all angular requests
        app.get('*', function(req, res){
            res.sendfile('./public/views/index.html')
        })
    };