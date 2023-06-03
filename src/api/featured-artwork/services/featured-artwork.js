'use strict';

/**
 * featured-artwork service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::featured-artwork.featured-artwork');
