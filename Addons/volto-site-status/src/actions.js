import { GET_SITE_STATUS_CONFIG } from './constants';

export function getStatusConfig() {
  /*
   * The `type` property is used to identify the action.
   *
   * The `request` property is used to make the request to the server.
   */
     return {
      type: GET_SITE_STATUS_CONFIG,
      request: {
        op: 'get',
        path: `/@site-status`,
      },
    };
  }