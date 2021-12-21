/** @param {NS} ns **/
export async function main(ns) {
    for (let i = 1; i < 18; i++) {
        var ram = Math.pow(2, i)
        ns.tprint(ram)
        ns.tprint(ns.getPurchasedServerCost(ram).toLocaleString())
        await ns.sleep(100)
    }
}