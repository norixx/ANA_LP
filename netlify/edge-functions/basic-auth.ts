// export { handler as default } from 'https://deno.land/x/netlify_basic_auth_edge_function@LATEST_VERSION/mod.ts';

// netlify/edge-functions/basic-auth.ts
import type { Context } from '@netlify/edge-functions';

export default async (request: Request, context: Context) => {
  const authHeader = request.headers.get('authorization');

  const validUser = Netlify.env.get('BASIC_USERNAME');
  const validPass = Netlify.env.get('BASIC_PASSWORD');

  if (authHeader) {
    const [, encoded] = authHeader.split(' ');
    const decoded = atob(encoded);
    const [user, pass] = decoded.split(':');

    if (user === validUser && pass === validPass) {
      return context.next(); // 認証成功、次の処理へ
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Protected Area"',
    },
  });
};