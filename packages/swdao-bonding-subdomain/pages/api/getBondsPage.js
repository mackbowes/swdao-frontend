import { alchemyProvider } from '../../utils/provider'
import { BigNumber, utils } from 'ethers'
import { BONDS } from '../../utils/const'

export default async function handler(req, res) {
    let { address, page, amountToView } = JSON.parse(req.body)
    const bondsArrayHashData = utils.concat([
        utils.zeroPad(address, 32),
        utils.zeroPad('0x01', 32),
    ])
    const bondsArraySlot = utils.keccak256(bondsArrayHashData)
    const bondsArrayFirstSlot = BigNumber.from(utils.keccak256(bondsArraySlot))
    const totalBonds = BigNumber.from(
        await alchemyProvider.core.getStorageAt(BONDS, bondsArraySlot)
    ).toNumber()
    const bonds = []
    const bondsArrayFirstPageSlot = bondsArrayFirstSlot.add(page * amountToView)
	if (totalBonds < (page + 1) * amountToView)
        amountToView = totalBonds % amountToView
    for (let i = 0; i < amountToView; i++) {
        const bond = await alchemyProvider.core.getStorageAt(
            BONDS,
            bondsArrayFirstPageSlot.add(i)
		)
        const depositDate = BigNumber.from(
            utils.hexDataSlice(bond, 20, 32)
        ).toNumber()
        const amount = BigNumber.from(
            utils.hexDataSlice(bond, 10, 20)
        )
        const withdrawn = BigNumber.from(
            utils.hexDataSlice(bond, 0, 10)
        )
        bonds.push({ depositDate, amount, withdrawn })
    }
	res.status(201).json({ totalBonds, bonds })
}
