const {User, sequelize} = require('../db/models');
const createError = require('http-errors');
const _ = require('lodash');

module.exports.createNewUser = async (req, res, next) => {
    const {body, file}= req;
    if(file){ body.image = file.filename; }
    try{ 
        const newUser = await User.create(body);
        const objUser = _.omit(newUser.get(), ['createdAt', 'updatedAt']);
        res.status(200).send({data:  objUser});
    }catch(err){
        next(err);
    }
};

// module.exports.getAllUsers = async (req, res, next) => {
//     try{
//         const foundUsers = await User.findAll({
//             raw: true,
//             attributes: {exclude: ['createdAt', 'updatedAt']},
//             include: {
//             },
//             through: {attributes: []},
//         });
//         //console.log('=====================>>>>>',foundUsers);
//         const sendUsers = {};
//         foundUsers.forEach( i => {
//             sendUsers[i.id] = i;
//         });
//         console.log('=========================>', sendUsers)
//         res.status(200).send({data: Object.values(sendUsers)});
//     } catch(err){
//         next(err);
//     }
// };


module.exports.getAllUsers = async (req, res, next) => {
    try{
        const foundUsers = await User.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            }
        });
        console.log(foundUsers);
        res.status(200).send({data: foundUsers});
    } catch(err){
        next(err);
    }
};


module.exports.getUserById = async (req, res, next) => {
    try{
        const foundUser = await User.findByPk(id);
        if(foundUser){
            return res.status(200).send({data: foundUser});
        }
        next(createError(404, 'The user not found'));
    } catch(err){
        next(err);
    }
};

module.exports.deleteUserById = async (req, res, next) => {
    const { params: {userId} } = req;
    const userIdN = Number(userId);
    console.log('delete. req params=',req.params);
    try{
        const deletedUser = await User.destroy({
            where: {
                id : userIdN,
            },
        });
        if(deletedUser) return res.status(204).send();
        next(createError(404, 'The user not found'));
    } catch(err){
        next(err);
    }
};

module.exports.updateUserById = async (req, res, next) => {
    const { body, params: {userId} } = req;
    try{
        const [updUserCount, [updUser]] = await User.update(body, {
            where: {id: userId},
            raw: true,
            returning: true
        });
        if(updUserCount){
            return res.status(200).send({data: updUser});
        }
        next(createError(404, 'The user not found'));
    } catch(err){
        next(err);
    }
};