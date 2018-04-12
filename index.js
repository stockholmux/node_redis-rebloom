function addReBloomModule(redis) {
  var cmds = ["bf.reserve", "bf.add", "bf.madd", "bf.exists", "bf.mexists", "cf.reserve", "cf.add", "cf.addnx", "cf.exists", "cf.mexists", "cf.insert", "cf.insertnx",  "cf.del",  "cf.count",  "cf.scandump",  "cf.loadchunk"];
  
  cmds.forEach(function(aCmd) {
    redis.addCommand(aCmd);
  });
}
module.exports = addReBloomModule;
