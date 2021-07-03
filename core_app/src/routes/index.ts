import { FastInstanceResult } from '../app';
import { postDekisugi } from '../controllers/dekisugi';

export function setupAllRoutes(fast: FastInstanceResult): FastInstanceResult {
    // discord bot
    fast.post('/dekisugi', postDekisugi);

    return fast;
}
