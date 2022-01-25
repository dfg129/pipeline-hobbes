import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import { S3HobbesStack } from './s3-hobbes';

export class S3HobbesStage extends cdk.Stage {
    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
        super(scope, id, props);

        const s3Stack == new S3HobbesStack(this, 'S3Stack');
    }

}
