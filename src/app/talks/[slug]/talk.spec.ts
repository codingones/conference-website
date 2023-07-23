import { it, describe, expect } from 'vitest';
import { Talk, TalkJson, toTalk } from './talk';

describe('talk', (): void => {
  it('should extract Building Scalable Web Applications talk from json', (): void => {
    const talkJson: TalkJson = {
      title: 'Building Scalable Web Applications with Microservices Architecture',
      speaker: 'John Doe',
      description:
        'Learn how to design and develop highly scalable web applications using microservices architecture. Discover best practices, challenges, and tools for building distributed systems.',
      date: '2023-08-15T14:30:00Z',
      duration: 45,
      room: 'Hall A',
      track: 'Web Development',
      language: 'English',
      slidesLink: 'https://example.com/talks/building-scalable-web-apps-slides',
      videoLink: 'https://example.com/talks/building-scalable-web-apps-video',
      tags: ['Microservices', 'Scalability', 'Distributed Systems']
    };

    const talk: Talk = toTalk(talkJson);

    expect(talk).toEqual({
      slug: 'building-scalable-web-applications-with-microservices-architecture',
      title: 'Building Scalable Web Applications with Microservices Architecture',
      speaker: 'John Doe',
      description:
        'Learn how to design and develop highly scalable web applications using microservices architecture. Discover best practices, challenges, and tools for building distributed systems.',
      date: new Date('2023-08-15T14:30:00Z'),
      duration: 45,
      room: 'Hall A',
      track: 'Web Development',
      language: 'English',
      slidesLink: 'https://example.com/talks/building-scalable-web-apps-slides',
      videoLink: 'https://example.com/talks/building-scalable-web-apps-video',
      tags: ['Microservices', 'Scalability', 'Distributed Systems']
    });
  });

  it('should extract AI and Ethical Considerations talk from json', (): void => {
    const talkJson: TalkJson = {
      title: 'AI and Ethical Considerations: Striking the Right Balance',
      speaker: 'Jane Smith',
      description:
        'Explore the ethical challenges associated with AI development and deployment. Understand the importance of responsible AI practices and how they can influence decision-making.',
      date: '2023-08-16T10:00:00Z',
      duration: 30,
      room: 'Hall B',
      track: 'Artificial Intelligence',
      language: 'English',
      slidesLink: 'https://example.com/talks/ai-and-ethical-considerations-slides',
      videoLink: 'https://example.com/talks/ai-and-ethical-considerations-video',
      tags: ['AI Ethics', 'Responsible AI', 'Decision-making']
    };

    const talk: Talk = toTalk(talkJson);

    expect(talk).toEqual({
      slug: 'ai-and-ethical-considerations-striking-the-right-balance',
      title: 'AI and Ethical Considerations: Striking the Right Balance',
      speaker: 'Jane Smith',
      description:
        'Explore the ethical challenges associated with AI development and deployment. Understand the importance of responsible AI practices and how they can influence decision-making.',
      date: new Date('2023-08-16T10:00:00Z'),
      duration: 30,
      room: 'Hall B',
      track: 'Artificial Intelligence',
      language: 'English',
      slidesLink: 'https://example.com/talks/ai-and-ethical-considerations-slides',
      videoLink: 'https://example.com/talks/ai-and-ethical-considerations-video',
      tags: ['AI Ethics', 'Responsible AI', 'Decision-making']
    });
  });
});
