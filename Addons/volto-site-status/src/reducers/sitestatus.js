/**
 * Data Providers reducer
 * @module reducers/data_providers
 */

// Import the constants
import { GET_SITE_STATUS_CONFIG } from '../constants';

// Define the initial state
const initialState = {
  config: {},
  error: null,
  loaded: false,
  loading: false,
};

// Define the reducer
export default function sitestatus(state = initialState, action = {}) {

  // Switch on the action type
  switch (action.type) {

    // The action type is `${GET_SITE_STATUS_CONFIG}_PENDING`
    case `${GET_SITE_STATUS_CONFIG}_PENDING`:

      // Update the state to show that the request is pending
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
      };

    // The action type is `${GET_SITE_STATUS_CONFIG}_SUCCESS`
    case `${GET_SITE_STATUS_CONFIG}_SUCCESS`:

      // Update the state to show that the request was successful
      // and set the config to the result of the request
      return {
        ...state,
        config: {
          ...(action.result || {}),
        },
        error: null,
        loaded: true,
        loading: false,
      };

    // The action type is `${GET_SITE_STATUS_CONFIG}_FAIL`
    case `${GET_SITE_STATUS_CONFIG}_FAIL`:

      // Update the state to show that the request failed
      // and set the error to the error message from the request
      return {
        ...state,
        error: action.error,
        loaded: false,
        loading: false,
      };

    // The action type is not recognized
    default:

      // Return the current state
      return state;
  }
}
