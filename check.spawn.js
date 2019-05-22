/*
This program will check if a NPC needs to be spawned
*/

// Allows the use of the prototype.spawn function
require('prototype.spawn')();

module.exports = function() {

    // count the number of creeps alive for each role
    // _.sum will count the number of properties in Game.creeps filtered by the
    //  arrow function, which checks for the creep being a harvester
    var numOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
    var numOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
    var numOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
    var numOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
    var numOfWallRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer');

    // setup some maximum numbers for different roles
    var maxNumOfHarvesters = 3;
    var maxNumOfUpgraders = 1;
    var maxNumOfBuilders = 1;
    var maxNumOfRepairers = 1;
    var maxNumOfWallRepairers = 1;
    
    // stores the value for the amount of energy available in a room
    var energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
    
    var name = undefined;

    // if not enough harvesters
    if (numOfHarvesters < maxNumOfHarvesters) {
        // try to spawn one
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'harvester')
        // if spawning failed and we have no harvesters left
        if (name == ERR_NOT_ENOUGH_ENERGY && numOfHarvesters == 0) {
            // spawn one with what is available
            name = Game.spawns.Spawn1.createCustomCreep(
                Game.spawns.Spawn1.room.energyAvailable, 'harvester');
        }
    }
    // if not enough upgraders
    else if (numOfUpgraders < maxNumOfUpgraders) {
        // try to spawn one
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'upgrader')
    }
    // if not enough builders
    else if (numOfBuilders < maxNumOfBuilders) {
        // try to spawn one
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder')
    }
    // if not enough repairers
    else if (numOfRepairers < maxNumOfRepairers) {
        // try to spawn one
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'repairer')
    }
    // if not enough wallRepairers
    else if (numOfWallRepairers < maxNumOfWallRepairers) {
        // try to spawn one
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'wallRepairer');
    }

    // print name to console if spawning was a success
    if (typeof(name) == "string") {
        console.log("Spawned new creep: " + name);
        console.log("    creep role: " + Game.creeps[name].memory.role);
    }
};