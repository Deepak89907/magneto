"use strict";
/**
 * OBSERVER PATTERN
 *
 * Real-life example: Newsletter Subscription System
 * Use case: Notify multiple subscribers when new content is published
 * without tight coupling between the publisher and subscribers.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsletterPublisher = exports.PushNotificationSubscriber = exports.SMSSubscriber = exports.EmailSubscriber = void 0;
exports.demonstrateObserver = demonstrateObserver;
// Concrete observers
class EmailSubscriber {
    constructor(info) {
        this.info = info;
    }
    update(newsletter) {
        if (this.info.preferences.includes(newsletter.category)) {
            console.log(`📧 Email sent to ${this.info.email}:`);
            console.log(`   Subject: ${newsletter.title}`);
            console.log(`   Category: ${newsletter.category}`);
            console.log(`   Preview: ${newsletter.content.substring(0, 50)}...`);
        }
    }
    getSubscriberInfo() {
        return this.info;
    }
}
exports.EmailSubscriber = EmailSubscriber;
class SMSSubscriber {
    constructor(info, phoneNumber) {
        this.info = info;
        this.phoneNumber = phoneNumber;
    }
    update(newsletter) {
        if (this.info.preferences.includes(newsletter.category)) {
            console.log(`📱 SMS sent to ${this.phoneNumber}:`);
            console.log(`   ${newsletter.title} - ${newsletter.category}`);
            console.log(`   Read more at: newsletter.com/${newsletter.id}`);
        }
    }
    getSubscriberInfo() {
        return this.info;
    }
}
exports.SMSSubscriber = SMSSubscriber;
class PushNotificationSubscriber {
    constructor(info, deviceToken) {
        this.info = info;
        this.deviceToken = deviceToken;
    }
    update(newsletter) {
        if (this.info.preferences.includes(newsletter.category)) {
            console.log(`🔔 Push notification sent to device ${this.deviceToken}:`);
            console.log(`   ${newsletter.title}`);
            console.log(`   Tap to read more`);
        }
    }
    getSubscriberInfo() {
        return this.info;
    }
}
exports.PushNotificationSubscriber = PushNotificationSubscriber;
// Subject (Observable)
class NewsletterPublisher {
    constructor() {
        this.subscribers = [];
        this.newsletters = [];
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
        const info = subscriber.getSubscriberInfo();
        console.log(`✅ ${info.email} subscribed to categories: ${info.preferences.join(', ')}`);
    }
    unsubscribe(subscriber) {
        const index = this.subscribers.indexOf(subscriber);
        if (index > -1) {
            const info = subscriber.getSubscriberInfo();
            this.subscribers.splice(index, 1);
            console.log(`❌ ${info.email} unsubscribed`);
        }
    }
    publish(newsletter) {
        console.log(`\n📰 Publishing newsletter: "${newsletter.title}" in category "${newsletter.category}"`);
        this.newsletters.push(newsletter);
        this.notifySubscribers(newsletter);
    }
    notifySubscribers(newsletter) {
        console.log('\n--- Notifying subscribers ---');
        const relevantSubscribers = this.subscribers.filter(subscriber => subscriber.getSubscriberInfo().preferences.includes(newsletter.category));
        if (relevantSubscribers.length === 0) {
            console.log('No subscribers interested in this category.');
            return;
        }
        relevantSubscribers.forEach(subscriber => {
            subscriber.update(newsletter);
        });
    }
    getSubscriberCount() {
        return this.subscribers.length;
    }
    getNewsletters() {
        return [...this.newsletters];
    }
}
exports.NewsletterPublisher = NewsletterPublisher;
// Example usage
function demonstrateObserver() {
    console.log('\n=== OBSERVER PATTERN DEMO ===');
    const publisher = new NewsletterPublisher();
    // Create subscribers with different preferences
    const emailSub1 = new EmailSubscriber({
        id: '1',
        email: 'john@example.com',
        preferences: ['tech', 'business']
    });
    const emailSub2 = new EmailSubscriber({
        id: '2',
        email: 'jane@example.com',
        preferences: ['health', 'lifestyle']
    });
    const smsSub = new SMSSubscriber({
        id: '3',
        email: 'bob@example.com',
        preferences: ['tech', 'news']
    }, '+1-555-0123');
    const pushSub = new PushNotificationSubscriber({
        id: '4',
        email: 'alice@example.com',
        preferences: ['business', 'health']
    }, 'device-token-123');
    // Subscribe users
    publisher.subscribe(emailSub1);
    publisher.subscribe(emailSub2);
    publisher.subscribe(smsSub);
    publisher.subscribe(pushSub);
    console.log(`\nTotal subscribers: ${publisher.getSubscriberCount()}`);
    // Publish newsletters
    publisher.publish({
        id: 'nl-001',
        title: 'Latest Tech Trends 2024',
        content: 'Discover the most exciting technology trends that will shape the future...',
        category: 'tech',
        publishDate: new Date()
    });
    publisher.publish({
        id: 'nl-002',
        title: 'Healthy Living Tips',
        content: 'Learn about simple lifestyle changes that can improve your health...',
        category: 'health',
        publishDate: new Date()
    });
    publisher.publish({
        id: 'nl-003',
        title: 'Market Analysis Q4',
        content: 'Comprehensive analysis of market trends and business opportunities...',
        category: 'business',
        publishDate: new Date()
    });
    // Unsubscribe a user
    console.log('\n--- Unsubscribing a user ---');
    publisher.unsubscribe(emailSub1);
    // Publish another newsletter
    publisher.publish({
        id: 'nl-004',
        title: 'Breaking Tech News',
        content: 'Major breakthrough in artificial intelligence research announced...',
        category: 'tech',
        publishDate: new Date()
    });
}
//# sourceMappingURL=NewsletterSystem.js.map