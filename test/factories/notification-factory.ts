import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Overrride = Partial<NotificationProps>;

export function makeNotification(override: Overrride = {}) {
  return new Notification({
    category: 'social',
    content: new Content('New friendship request'),
    recipientId: 'recipient-1',
    ...override,
  });
}
