/** @param {import(".").NS } ns */
// /** @param {NS} ns **/

export async function main(ns) {
    var target = ns.args[0]
    var scriptHack = "intro-script.js"
    var scriptPrep = "server-prep.js"
    var scriptRam = ns.getScriptRam(scriptHack)
    var serverRam = ns.getServerMaxRam(target)
    ns.run(scriptPrep, 1, target)
    await ns.sleep(1000)
    ns.tprint(scriptRam)
    ns.tprint(serverRam)
    var threads = Math.floor(serverRam/scriptRam)
    ns.tprint(threads)
    // omega-net 24 intro-script.js omega-net
    // run exec-remote.js omega-net 24 intro-script.js omega-net
    ns.tprint("exec-remote.js", 1, target, threads, scriptHack, target)
    ns.run("exec-remote.js", 1, target, threads, scriptHack, target)
}
