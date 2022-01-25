#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PipelineStack } from '../lib/pipeline-hobbes-stack';

const app = new cdk.App();
new PipelineHobbesStack(app, 'PipelineHobbesStack', {
    env: {
        account: '707338571369',
        region: 'us-east-1',
    }
});

app.synth();
