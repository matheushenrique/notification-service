import { Notification } from './notification';
import { Content } from './content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('You receive a friend request'),
      category: 'social',
      recipientId: 'example',
    });

    expect(notification).toBeTruthy();
  });
});
