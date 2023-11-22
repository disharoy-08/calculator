const controller = require('../controllers')

module.exports = (app)=>{
    app.get('/',controller.resultController.calculator)
    app.post('/data-save', controller.dataController.datasaver)
    //app.post('/result', controller.dataController.datasaver)
    //app.post('/result', controller.viewController.show)
    app.get('/result', controller.viewController.show)
}
