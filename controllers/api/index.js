const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const exerciseRoutes = require('./exercise-routes.js');
const activityRoutes = require('./activity-routes.js');
router.use('/users', userRoutes);
router.use('/exercises', exerciseRoutes);
router.use('/activities', activityRoutes);
module.exports = router;