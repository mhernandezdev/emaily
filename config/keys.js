if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
}else{
    console.log('WHY AM I IN DEV')
    //module.exports = require('./dev');
}