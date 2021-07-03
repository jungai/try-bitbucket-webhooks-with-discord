import { RouteHandlerMethod, RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression } from 'fastify';

export type IPostDekisugi = RouteHandlerMethod<
    RawServerDefault,
    RawRequestDefaultExpression,
    RawReplyDefaultExpression,
    {
        // NOTE: This is not a real type just in case
        // TODO: fix type {@link https://support.atlassian.com/bitbucket-cloud/docs/event-payloads/#EventPayloads-Merged}
        Body: {
            pullrequest: {
                title: string;
                author: { display_name: string };
                links: { html: { href: string } };
                destination: { branch: { name: string } };
            };
            repository: { name: string };
        };
    },
    unknown
>;
