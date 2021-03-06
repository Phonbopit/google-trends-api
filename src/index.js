'use strict';

import api from './api';

export default {
  autoComplete: api('auto complete'),
  interestByRegion: api('interest by region'),
  interestOverTime: api('interest over time'),
  relatedQueries: api('related queries'),
  relatedTopics: api('related topics'),
};
