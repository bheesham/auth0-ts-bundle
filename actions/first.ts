import { IncomingWebhook } from '@slack/webhook';
import { someFunction } from '../lib/example';

export function weWouldNeverDoThisProbably() {
    return someFunction();
}

export async function onExecutePostLogin(event: any, api: any) {
    console.log("foobar");
}
