import { MahameruResponse, type MahameruContainer, type MahameruRequest, type RouteHandlerContext } from 'mahameru/core'

export async function GET(request: MahameruRequest, container: MahameruContainer, context: RouteHandlerContext): Promise<MahameruResponse> {
    const path = request.url.split('?')[0];

    return MahameruResponse.json({ success: false, error: 'NOT_FOUND', message: 'Route not found', path }, { status: 404 });
}
