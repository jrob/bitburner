/** @param {NS} ns **/
export async function main(ns) {
    var target = ns.args[0]
    var script = ns.args[1]
    const servers = [
        //"sigma-cosmetics",
        "silver-helix", 
        "max-hardware", 
        "hong-fang-tea",
        "iron-gym",
        "zer0",
        "neo-net",
        "phantasy",
        "nectar-net",
        "joesguns",
        "harakiri-sushi",
        "omega-net",
        "avmnite-02h",
        ];
    
    var scriptRam = ns.getScriptRam(script)
    //ns.tprint(scriptRam)
    for (const server of servers){
        var serverRam = ns.getServerMaxRam(server)
        //ns.tprint(serverRam)
        var threads = Math.floor(serverRam / scriptRam)
        //ns.tprint(threads)
        await ns.killall(server)
        ns.run("exec-remote.js", 1, server, threads, script, target)
        await ns.sleep(100)
    }
}