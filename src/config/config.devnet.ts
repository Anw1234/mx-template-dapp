import { EnvironmentsEnum } from 'types';

export * from './sharedConfig';

export const contractAddress =
  'erd1m7dxydyfjzmqtp255q2qqr8nl2qexnpxdfny3hpzzfuqa4a6w6yq5zva9r';
export const API_URL = 'https://devnet-template-api.multiversx.com';
export const sampleAuthenticatedDomains = [API_URL];
export const environment = EnvironmentsEnum.devnet;
