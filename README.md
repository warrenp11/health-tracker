# health-tracker

User model:
    email,
    password,
    username,
    age,
    gender,
    height,
    weight

Exercise model:
    `name`,
    `category`,
    `link`,
    user_id

Activity model:
    `time`,
    `sets`,
    `reps`,
    exid,
    uid,







### Deploy to Heroku (through main) early to test data

### Environment Variables
DB_NAME="health_tracker_db"
DB_USER="" <your username>
DB_PW="" <your password>


### Current Tasks
* [] Jagy
    * [] Backend databases/sql
* [] Hunter
    * [] front-end javascript button functionality
* [] Peter
    * [] *!* handlebars layouts
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