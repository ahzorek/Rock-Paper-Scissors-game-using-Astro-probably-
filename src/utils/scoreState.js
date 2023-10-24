import { atomWithStorage } from 'jotai/utils';

const scoreState = atomWithStorage('points', 0)

export { scoreState }