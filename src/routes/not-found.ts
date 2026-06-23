import { MahameruResponse, MahameruMiddlewareContext} from 'mahameru/core'

export async function GET() {
    return MahameruResponse.json({ success: false, error: 'Not Found' }, { status: 404 });
}
