import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { S3HobbesStage  } from './pipeline-s3-stage';

export class PipelineHobbesStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const pipeline = new CodePipeline(this, 'PipelineHobbes', {
            pipelineName: 'S3Pipeline',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.connection('dfg129/pipeline-hobbes', 'main', {
                  connectionArn: 'arn:aws:codestar-connections:us-east-1:707338571369:connection/dc99f243-92b7-4802-be99-45049d05c420',
                }),
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            })
        });

        pipeline.addStage(new S3HobbesStage(this, "test", {
            env: { account: '707338571369', region: "us-east-1" }
        }));
    }
}
