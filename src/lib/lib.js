const {timeago, register} = require("timeago.js");


exports.index = function (req, res) {
   
  const timeago = (timestamp) => format(timestamp, "es_ES" );

   
  res.render("../views/index", { timeago});
};
