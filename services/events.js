const MongoLib = require('../lib/mongo');

class EventsService {

    constructor() {
        this.collection = 'events';
        this.mongoDB = new MongoLib;
    }

    async getEvents() {
        const events = await this.mongoDB.getAll(this.collection);
        return events || [];
    }

    async getEvent({ eventId }) {
        const event = await this.mongoDB.get(this.collection, eventId);
        return event || {};
    }

    async createEvent({ event }) {
        const createEventId = await this.mongoDB.create(this.collection, event);
        return createEventId;
    }

    async updateEvent({ eventId, event } = {}) {
        const updateEventId = await this.mongoDB.update(this.collection, eventId, event);
        return updateEventId;
    }

    async deleteEvent({ eventId }) {
        const deleteEventId = await this.mongoDB.delete(this.collection, eventId);
        return deleteEventId;
    }
}

module.exports = EventsService;