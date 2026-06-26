import { MahameruResponse, type RouteHandler } from "mahameru";

export const GET: RouteHandler = async (request) => {
    return MahameruResponse.json({ success: true, data: request.user });
};
