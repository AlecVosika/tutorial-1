// import modules
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function () {
    // for every creep name in Game.creeps
    for (let name in Game.creeps) {
        // get the creep object
        var creep = Game.creeps[name];

        // if creep is harvester, call harvester script
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        // if creep is upgrader, call upgrader script
        else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
};


//Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE],"Alec",{working: false})
//Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE],"Jeremy",{working: false})
//Game.creeps.Alec.memory.role = 'harvester'
//Game.creeps.Jeremy.memory.role = 'upgrader'