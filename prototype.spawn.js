/*
This function continuously makes better creeps based on the amount of energy available
*/

module.exports = function() {
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createCustomCreep = 
        function(energy, roleName){
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 200); // Math.floor rounds down; EX: 5.5 = 5
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            // create creep with the created body and the given role
            if (roleName == 'wallRepairer'){
                return this.createCreep(body, 'Trump', { role: roleName, working: false });
            }
            else{
                return this.createCreep(body, undefined, { role: roleName, working: false });
            }
        };
};