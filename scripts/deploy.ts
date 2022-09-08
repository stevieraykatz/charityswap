
import { ethers } from "hardhat";
import * as logger from "../utils/logger"
import * as fs from "fs";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

const diamond = require('diamond-util')

async function deploy() {

  let deployer: SignerWithAddress
  [deployer] = await ethers.getSigners()
  
  const network = await ethers.provider.getNetwork()

  logger.divider()
  logger.out("Deploying to: " + network.name, logger.Level.Info)
  logger.out("With chain id: " + network.chainId, logger.Level.Info)

  const deployedDiamond = await diamond.deploy({
    diamondName: 'StakingDiamond',
    facets: [
      'DiamondCutFacet',
      'DiamondLoupeFacet',
      'OwnershipFacet'
    ],
    args: [deployer]
  })

  // let rawdata = fs.readFileSync('address.json', "utf8")
  // let address: any = JSON.parse(rawdata)
  // address[network.chainId] = lock.address
  // const json = JSON.stringify(address, null, 2)
  // fs.writeFileSync('address.json', json, "utf8")
}

deploy().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});