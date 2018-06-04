import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import ContactMap from '../src/component/ContactMap';

storiesOf('ContactMap', module).add('with no props', () => <ContactMap />);
