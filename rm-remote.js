/** @param {import(".").NS } ns */
// /** @param {NS} ns **/

export async function main(ns) {
    var target = ns.args[0];
    var file = ns.args[1];
    ns.rm(file, target)
}
