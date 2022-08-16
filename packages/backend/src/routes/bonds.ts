import { BigNumber, utils } from "ethers";
import express, { Request, Response, Router } from "express";
import { alchemyProvider } from "../bin/www";
import { BONDS } from "../settings";

const router: Router = express.Router();

router.post("/getUserBalance", async (req: Request, res: Response) => {
  const { addressUser, addressToken } = JSON.parse(req.body);
  const balance = BigNumber.from(
    (await alchemyProvider.core.getTokenBalances(addressUser, [addressToken]))
      .tokenBalances[0].tokenBalance
  );
  res.status(balance ? 201 : 500).json(balance);
});

router.post("/getStorageAt", async (req: Request, res: Response) => {
  const { address, slotNumber } = JSON.parse(req.body);
  const slot = await alchemyProvider.core.getStorageAt(
    address,
    BigNumber.from(slotNumber)
  );
  res.status(slot ? 201 : 500).json(slot);
});

router.post("/getUserSwdAvailable", async (req: Request, res: Response) => {
  const { address, slotNumber } = JSON.parse(req.body);
  const slot = await alchemyProvider.core.getStorageAt(
    address,
    BigNumber.from(slotNumber)
  );
  res.status(slot ? 201 : 500).json(slot);
});

router.post("/getBondsPage", async (req: Request, res: Response) => {
  const { address, page, amountToView: aTV } = JSON.parse(req.body);
  let amountToView = aTV;
  const bondsArrayHashData = utils.concat([
    utils.zeroPad(address, 32),
    utils.zeroPad("0x01", 32),
  ]);
  const bondsArraySlot = utils.keccak256(bondsArrayHashData);
  const bondsArrayFirstSlot = BigNumber.from(utils.keccak256(bondsArraySlot));
  const totalBonds = BigNumber.from(
    await alchemyProvider.core.getStorageAt(BONDS, bondsArraySlot)
  ).toNumber();
  const bonds = [];
  const bondsArrayFirstPageSlot = bondsArrayFirstSlot.add(page * amountToView);
  if (totalBonds < (page + 1) * amountToView)
    amountToView = totalBonds % amountToView;
  for (let i = 0; i < amountToView; i++) {
    const bond = await alchemyProvider.core.getStorageAt(
      BONDS,
      bondsArrayFirstPageSlot.add(i)
    );
    const depositDate = BigNumber.from(
      utils.hexDataSlice(bond, 20, 32)
    ).toNumber();
    const amount = BigNumber.from(utils.hexDataSlice(bond, 10, 20));
    const withdrawn = BigNumber.from(utils.hexDataSlice(bond, 0, 10));
    bonds.push({ depositDate, amount, withdrawn });
  }
  res.status(201).json({ totalBonds, bonds });
});

export default router;
