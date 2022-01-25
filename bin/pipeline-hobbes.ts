#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PipelineHobbes } from '../lib/pipeline-hobbes';

const app = new cdk.App();
new PipelineHobbesStack(app, 'PipelineHobbesStack', {
    env: {
        account: '707338571369',
        region: 'us-east-1',
    }
});

app.synth();
