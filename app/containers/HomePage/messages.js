/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage:
      'At Earth Recycler, the concept of solid waste management is redefined through professional and systematic process incorporating awareness program on source',
  },
  content: {
    id: `${scope}.content`,
    defaultMessage:
      'Earth Recycler is a pioneer in providing integrated environmental friendly services & solutions, strongly committed to protecting the environment and build',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
