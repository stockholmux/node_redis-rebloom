function addReBloomModule(redis) {
  var cmds = ["bf.reserve", "bf.add", "bf.madd", "bf.exists", "bf.mexists"];
  
  cmds.forEach(function(aCmd) {
    redis.addCommand(aCmd);
  });
}
module.exports = addReBloomModule;