import { ethereum, BigInt } from '@graphprotocol/graph-ts'
import { V2_2_MIGRATION_TIME } from './constants'


export const VERSION_BEFORE_V2_2 = "BEFORE_V2_2"
export const VERSION_V2_2 = "V2_2"

export function buildId(event: ethereum.Event): string {
  return event.transaction.hash.toHexString() + event.logIndex.toString()
}

export function isAfterV2_2(timestamp: BigInt): boolean {
  return timestamp.ge(BigInt.fromString(V2_2_MIGRATION_TIME))
}
