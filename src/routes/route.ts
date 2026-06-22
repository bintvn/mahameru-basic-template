import { type RouteHandler, MahameruResponse } from 'mahameru/core'

export const GET: RouteHandler = async (request) => {
    return MahameruResponse.json({
        framework: 'Custom Node Backend Framework',
        status: 'Online'
    });
};
