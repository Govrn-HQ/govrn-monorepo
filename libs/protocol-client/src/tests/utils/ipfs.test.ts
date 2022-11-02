import { describe, expect, test } from '@jest/globals';
import Ajv from 'ajv';
import v1Schema from '../../schemas/contributionMetadataV1.json';
import { MintedContributionSchemaV1 } from '../../lib/utils/ipfs';
import { ContributionV1SchemaCid } from '../../lib/utils/constants';

// 1. test metadata is appropriate for schema
// 2. test mint hook
// 3. test upload file move hardcoded schema
describe('sum module', () => {
  test('test schema matches type', () => {
    const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
    const validate = ajv.compile(v1Schema);
    const data: MintedContributionSchemaV1 = {
      schema: `ipfs://${ContributionV1SchemaCid}`,
      name: 'Made a test',
      details: 'Testing the schema matches the type',
      proof: 'ipfs://hello',
      activityName: 'Added unit test',
      image: 'ipfs://hello',
      govrn: {
        id: 1,
        activityTypeId: 2,
      },
    };
    const valid = validate(data);
    expect(valid).toBe(true);
  });
});
