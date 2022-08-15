import { alchemyProvider } from '../../utils/provider'
import { BigNumber } from 'ethers'

export default async function handler(req, res) {
    const { address, slotNumber } = JSON.parse(req.body)
    const slot = await alchemyProvider.core.getStorageAt(
        address,
        BigNumber.from(slotNumber)
    )
    res.status(slot ? 201 : 500).json(slot)
}