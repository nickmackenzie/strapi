'use strict';

/**
 * artist-spotlight service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::artist-spotlight.artist-spotlight');
