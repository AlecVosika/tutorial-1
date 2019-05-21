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

    // _.sum will count the number of properties in Game.creeps filtered by the
    //  arrow function, which checks for the creep being a harvester
    var numOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
    // goal: have 10 harvesters and as many upgraders as possible
    var minNumOfHarvesters = 10;
    var name = undefined;

    // if not enough harvesters
    if (numOfHarvesters < minNumOfHarvesters) {
        // try to spawn one
        name = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], 
            undefined, {role: 'harvester', working: false});
    }
    else {
        // else try to spawn an upgrader
        name = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE], 
            undefined, { role: 'upgrader', working: false});
    }

    // print name to console if spawning was a success
    if (typeof(name) == "string") {
        console.log("Spawned new creep: " + name);
    }
};