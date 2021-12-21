// /** @param {import(".").NS } ns */
/** @param {NS} ns **/

// run exec-remote.js omega-net 24 intro-script.js omega-net

export async function main(ns) {
    var target = ns.args[0];
    var count = ns.args[1];
    var file = ns.args[2];
    ns.rm(file, target)
    await ns.scp(file, target = target);
    ns.exec(file, target, count, ...ns.args.slice(3));
}
