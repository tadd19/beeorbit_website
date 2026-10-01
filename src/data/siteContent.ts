export interface SiteContent {
  home: {
    tag: string;
    headlineLine1: string;
    headlineHighlight: string;
    description: string;
  };
  info: {
    tag: string;
    title: string;
    subtitle: string;
    cards: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  work: {
    tag: string;
    title: string;
    subtitle: string;
    gameTitle: string;
    gameGenre: string;
    gameGenreEn: string;
    gameDescription: string;
    features: string[];
    platform: string;
    developer: string;
    gameIconUrl?: string; // Optional custom image URL or uploaded base64 data
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    email: string;
    description: string;
  };
}

export const defaultSiteContent: SiteContent = {
  home: {
    tag: 'MOBILE GAME STUDIO',
    headlineLine1: '재미의 새로운',
    headlineHighlight: '궤도를 그립니다.',
    description:
      'beeorbit(비오빗)은 일상에 기분 좋은 즐거움을 더하는 모바일 게임을 만듭니다. 부담 없이 즐길 수 있는 직관적인 재미와 깊이 있는 몰입을 지향합니다.',
  },
  info: {
    tag: '01. ABOUT',
    title: 'INFO',
    subtitle:
      'beeorbit은 쉽고 편안하게 빠져들 수 있는 캐주얼 & 방치형 모바일 게임을 연구하고 개발하는 인디 스튜디오입니다.',
    cards: [
      {
        num: '01',
        title: '부담 없는 힐링 플레이',
        desc: '바쁜 일상 속에서 스트레스 없이 켜두기만 해도 기분 좋은 성장의 재미를 느낄 수 있는 게임을 만듭니다.',
      },
      {
        num: '02',
        title: '손끝의 감각과 피드백',
        desc: '단순한 규칙 속에서도 타격감과 시원한 이펙트, 아기자기한 캐릭터 조작의 손맛을 정밀하게 다듬습니다.',
      },
      {
        num: '03',
        title: '유저와 함께하는 성장',
        desc: '플레이어들의 목소리에 귀 기울이며 꾸준한 콘텐츠 업데이트와 밸런스 개선으로 오랫동안 사랑받는 서비스를 이어갑니다.',
      },
    ],
  },
  work: {
    tag: '02. WORK',
    title: 'GAMES',
    subtitle: 'beeorbit이 정성을 담아 개발한 모바일 게임 타이틀을 소개합니다.',
    gameTitle: '돈워리',
    gameGenre: '캐주얼 방치형',
    gameGenreEn: 'Casual Idle RPG',
    gameDescription:
      '귀여운 용사와 함께 떠나는 부담 없는 방치형 모험! 복잡한 조작 없이 지켜보기만 해도 쑥쑥 성장하고, 시원하게 몬스터들을 쓸어 담는 힐링 캐주얼 RPG입니다.',
    features: [
      '아기자기한 캐릭터와 호쾌한 액션 타격감',
      '언제 켜도 든든한 자동 파밍 & 무한 장비 성장',
      '스트레스 없는 직관적인 스킬 조합 시스템',
      '다양한 스테이지와 개성 넘치는 보스 레이드',
    ],
    platform: 'Google Play & App Store',
    developer: 'beeorbit',
    gameIconUrl: '', // Default uses the built-in DonworryIcon
  },
  contact: {
    tag: '03. GET IN TOUCH',
    title: 'CONTACT',
    subtitle: 'beeorbit과의 비즈니스 제휴, 퍼블리싱, 투자 및 기타 모든 문의를 환영합니다.',
    email: 'tadd@beeorbit.net',
    description: '보내주신 제안과 문의는 소중히 검토 후 빠른 시일 내에 회신드리겠습니다.',
  },
};
