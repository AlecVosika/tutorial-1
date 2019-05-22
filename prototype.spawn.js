/*
This function continuously makes better creeps based on the amount of energy available
*/
let count = 0;

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
//            console.log('what the fuck is going on ---- ', count);
            return this.createCreep(body, roleName + count++, { role: roleName, working: false });
        };
};
