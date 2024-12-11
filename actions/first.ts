import { IncomingWebhook } from '@slack/webhook';
import { SSMClient, ListNodesCommand } from "@aws-sdk/client-ssm";
import { someFunction } from '../lib/example';

export function weWouldNeverDoThisProbably() {
    return someFunction();
}

export async function onExecutePostLogin(event: any, api: any) {
    const client = new SSMClient({ region: "us-east-2" });
    const command = new ListNodesCommand({});
    const webhook = new IncomingWebhook("https://foobar");
    await webhook.send({text: "fooo"});
    await client.send(command);
    console.log("foobar");
}
