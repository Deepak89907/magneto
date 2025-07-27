/**
 * OBSERVER PATTERN
 *
 * Real-life example: Newsletter Subscription System
 * Use case: Notify multiple subscribers when new content is published
 * without tight coupling between the publisher and subscribers.
 */
export interface NewsletterSubscriber {
    update(newsletter: Newsletter): void;
    getSubscriberInfo(): SubscriberInfo;
}
export interface SubscriberInfo {
    id: string;
    email: string;
    preferences: string[];
}
export interface Newsletter {
    id: string;
    title: string;
    content: string;
    category: string;
    publishDate: Date;
}
export declare class EmailSubscriber implements NewsletterSubscriber {
    private info;
    constructor(info: SubscriberInfo);
    update(newsletter: Newsletter): void;
    getSubscriberInfo(): SubscriberInfo;
}
export declare class SMSSubscriber implements NewsletterSubscriber {
    private info;
    private phoneNumber;
    constructor(info: SubscriberInfo, phoneNumber: string);
    update(newsletter: Newsletter): void;
    getSubscriberInfo(): SubscriberInfo;
}
export declare class PushNotificationSubscriber implements NewsletterSubscriber {
    private info;
    private deviceToken;
    constructor(info: SubscriberInfo, deviceToken: string);
    update(newsletter: Newsletter): void;
    getSubscriberInfo(): SubscriberInfo;
}
export declare class NewsletterPublisher {
    private subscribers;
    private newsletters;
    subscribe(subscriber: NewsletterSubscriber): void;
    unsubscribe(subscriber: NewsletterSubscriber): void;
    publish(newsletter: Newsletter): void;
    private notifySubscribers;
    getSubscriberCount(): number;
    getNewsletters(): Newsletter[];
}
export declare function demonstrateObserver(): void;
//# sourceMappingURL=NewsletterSystem.d.ts.map