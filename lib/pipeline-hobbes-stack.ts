import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class PipelineHobbes extends cdk.Stack {
    constructor(scope: Construct, id: String, props?: cdk.StackProps) {
        super(scope, id, props);

        const pipeline = new CodePipeline(this, 'PipelineHobbes' {
            pipelineName: 'S3Pipeline',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.gitHub('dfg129/pipeline-hobbes', 'main'),
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            })
        });
    }
}
