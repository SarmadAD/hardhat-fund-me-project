const { network } = require("hardhat");
const {
    developmentChains,
    DECIMALS,
    INITAL_ANSWER,
} = require("../helper-hardhat-config");

module.exports = async (hre) => {
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    if (chainId == 31337) {
        log("Local network detected! Deploying mocks...");
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITAL_ANSWER],
        });
        log("Mocks deployed");
        log(
            "-------------------------------------------------------------------------"
        );
    }
};

module.exports.tags = ["all", "mocks"];
