import { gql, GraphQLClient } from 'graphql-request';
import { GovrnProtocol } from '@govrn/protocol-client'

const postgresUrl = process.env.DATABASE_URL;
const client = new GovrnProtocol(postgresUrl);

const createAndGetActivityType = async (
    globalId: string
) => {
};

const createOrGetGuildById = async (
    userId: string,
    activityName: string
) => {
};