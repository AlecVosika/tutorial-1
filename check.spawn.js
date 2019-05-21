    
 module.exports = {   
    run: function() {
    
        // count the number of creeps alive for each role
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a harvester
        var numOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');    var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
        var numOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
        var numOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
        
        // setup some minimum numbers for different roles
        var minNumOfHarvesters = 10;
        var minNumOfUpgraders = 1;
        var minNumOfBuilders = 1;
        
        var name = undefined;

        // if not enough harvesters
        if (numOfHarvesters < minNumOfHarvesters) {
            // try to spawn one
            name = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], 
                undefined, {role: 'harvester', working: false});
        }
        // if not enough upgraders
        else if (numOfUpgraders < minNumOfUpgraders) {
            // try to spawn one
            name = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE], undefined,
                { role: 'upgrader', working: false});
        }
        // if not enough builders
        else if (numOfBuilders < minNumOfBuilders) {
            // try to spawn one
            name = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], undefined,
                { role: 'builder', working: false});
        }
        else {
/*             // else try to spawn a builder
            name = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], undefined,
                { role: 'builder', working: false}); */
            }

        // print name to console if spawning was a success
        if (typeof(name) == "string") {
            console.log("Spawned new creep: " + name);
        }
    }
};