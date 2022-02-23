const { Router } = require("express");
const { append } = require("express/lib/response");
const controllers = require("../controllers/controllers")

const router = Router();
router.get('/login',controllers.views);
router.get('/',controllers.list);
router.post('/add',controllers.save)
router.get('/delete/:id',controllers.delete)
router.get('/update/:id',controllers.edit)
router.post('/update/:id',controllers.update)

module.exports=router;