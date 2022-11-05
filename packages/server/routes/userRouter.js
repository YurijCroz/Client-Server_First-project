const {Router} = require('express');
const {userController} = require('../controllers');
const userRouter = Router();
const {uploadFile} = require('../middleware');


userRouter
    .route('/')
    .post(uploadFile.uploadUserPhoto, userController.createNewUser)
    .get(userController.getAllUsers);


userRouter 
    .route('/:userId')
    .get(userController.getUserById)
    .delete(userController.deleteUserById)
    .patch(userController.updateUserById);

module.exports = userRouter;