## TO DO

* [] *!* handlebars
    * [] layouts
        WHEN user visits homepage (`localhost:3001/`)
            IF user is not logged in
                THEN display login/signup page
                IF user not a member
                    THEN signup
                ELSE user a member
                    THEN login
            IF user is logged in
                THEN display user info, ativity log
    * [] data

* [] Edits
    * [] User.js
        * [] *!* `/post` route needs to have the rest of User model afer `User.create` 
        * [] *?* height/weight = `DataTypes.INTEGER`
    * [] Exercise.js 
        * [] *?* `exerciseName` => `exercise_name`, etc...