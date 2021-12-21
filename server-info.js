/** @param {import(".").NS } ns */
// /** @param {NS} ns **/

export async function main(ns) {
	var target = ns.args[0];
	// ns.tprint(`maxmoney:  ${ns.getServerMaxMoney(target).toLocaleString()}`);
	ns.tprint(`t money:   ${(ns.getServerMaxMoney(target) * .75).toLocaleString()}`)
	ns.tprint(`money:     ${ns.getServerMoneyAvailable(target).toLocaleString()}`)
	ns.tprint(`t sec:     ${ns.getServerMinSecurityLevel(target) + 5}`);
	ns.tprint(`sec:       ${ns.getServerSecurityLevel(target)}`);
}
