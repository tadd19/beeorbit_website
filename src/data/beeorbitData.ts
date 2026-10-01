export interface GameProject {
  id: string;
  titleKo: string;
  titleEn: string;
  genreKo: string;
  genreEn: string;
  statusKo: string;
  statusEn: string;
  platform: string[];
  summaryKo: string;
  summaryEn: string;
  descriptionKo: string;
  descriptionEn: string;
  featuresKo: string[];
  featuresEn: string[];
  badgeColor?: string;
  themeStyle: 'defense' | 'survivor' | 'upcoming';
  releaseYear: string;
}

export const beeorbitGames: GameProject[] = [
  {
    id: 'game-1',
    titleKo: '운빨 랜덤 디펜스 : 궤도 수호자',
    titleEn: 'Lucky Random Defense : Orbit Guardians',
    genreKo: '모바일 실시간 협동 디펜스',
    genreEn: 'Real-Time Co-Op Random Defense',
    statusKo: '서비스 중',
    statusEn: 'Live on Stores',
    platform: ['Google Play', 'App Store'],
    summaryKo: '소환과 합성의 짜릿한 운빨, 친구와 함께 쏟아지는 웨이브를 막아내는 2인 실시간 협동 디펜스',
    summaryEn: 'Thrilling fusion and luck mechanics where two players cooperate in real time to repel relentless waves.',
    descriptionKo: '매 판마다 달라지는 소환 확률과 타워 시너지, 그리고 친구와 실시간으로 합을 맞추는 강력한 보스 레이드를 경험하세요. 직관적인 조작과 깊이 있는 전술 덱 빌딩을 결합했습니다.',
    descriptionEn: 'Experience unpredictable summoning odds, dynamic tower synergies, and high-stakes co-op boss raids. Engineered with intuitive one-touch controls and deep tactical deck-building.',
    featuresKo: [
      '2인 실시간 동시 접속 협동 모드',
      '수십 종의 고유 영웅 & 유물 시너지 조합',
      '단 3분 만에 즐기는 속도감 있는 한 판',
      '무한 던전 랭킹 시스템'
    ],
    featuresEn: [
      'Real-time 2-player synchronous co-op mode',
      'Dozens of unique heroes & artifact synergies',
      'Fast-paced 3-minute session loops',
      'Infinite dungeon global leaderboards'
    ],
    themeStyle: 'defense',
    releaseYear: '2025',
  },
  {
    id: 'game-2',
    titleKo: '오빗 블리츠 : 로그 서바이버',
    titleEn: 'Orbit Blitz : Rogue Survivor',
    genreKo: '캐주얼 로그라이크 슈팅 액션',
    genreEn: 'Casual Roguelite Shooter Action',
    statusKo: '서비스 중',
    statusEn: 'Live on Stores',
    platform: ['Google Play', 'App Store'],
    summaryKo: '사방에서 몰려드는 우주 적들을 격파하며 나만의 최강 스킬 트리를 완성하는 스피디한 우주 생존 액션',
    summaryEn: 'An adrenaline-fueled space survival action game where you blast swarms of alien ships with modular skill trees.',
    descriptionKo: '한 손 조작으로 간편하게 즐기는 핵앤슬래시 쾌감. 레벨업할 때마다 무작위로 주어지는 무기와 패시브를 조합하여 수만 마리의 적들을 한 방에 섬멸하세요.',
    descriptionEn: 'Seamless one-thumb controls meeting intense hack-and-slash satisfaction. Pick dynamic skill perks each level to wipe out massive screen-filling enemy swarms.',
    featuresKo: [
      '화면을 가득 채우는 1,000+ 동시 탄막 파티클',
      '자체 최적화로 60fps 무손실 쾌속 플레이',
      '50종 이상의 무기 진화 및 룬 각성',
      '오프라인 상태에서도 언제 어디서나 플레이 가능'
    ],
    featuresEn: [
      '1,000+ simultaneous projectiles on screen',
      'Buttery-smooth 60fps mobile optimization',
      'Over 50 weapon evolutions & rune awakenings',
      'Fully playable offline anytime, anywhere'
    ],
    themeStyle: 'survivor',
    releaseYear: '2025',
  },
  {
    id: 'game-3',
    titleKo: '프로젝트 X (차기 신작)',
    titleEn: 'Project X (Upcoming Title)',
    genreKo: '모바일 하이브리드 미드코어',
    genreEn: 'Mobile Hybrid Mid-Core Strategy',
    statusKo: '개발 진행 중',
    statusEn: 'In Development',
    platform: ['Cross Platform'],
    summaryKo: 'beeorbit 스튜디오의 독자적인 메커니즘을 적용한 차세대 신작 타이틀',
    summaryEn: 'Next-generation mobile title introducing revolutionary interactive mechanics from beeorbit.',
    descriptionKo: '기존 장르의 문법을 비틀어 신선한 몰입감을 주는 신작을 개발 중입니다. 빠르고 집요한 프로토타이핑을 통해 재미의 코어를 검증하고 있습니다.',
    descriptionEn: 'Currently forging a fresh genre-bending gameplay experience. Rapidly validating core fun loops through high-velocity prototyping.',
    featuresKo: [
      '신선한 게임 룰과 중독성 강한 코어 루프',
      '글로벌 원빌드 서비스 준비 중',
      '2026 하반기 글로벌 CBT 예정'
    ],
    featuresEn: [
      'Original game rules & addictive core loop',
      'Global one-build simultaneous launch',
      'Scheduled for Closed Beta Testing in 2026'
    ],
    themeStyle: 'upcoming',
    releaseYear: '2026',
  },
];

export const beeorbitInfo = {
  nameKo: '주식회사 비오빗 (beeorbit Co., Ltd.)',
  nameEn: 'beeorbit Co., Ltd.',
  sloganKo: '재미의 새로운 궤도를 그립니다',
  sloganEn: 'Drawing New Orbits of Fun',
  missionKo: 'beeorbit은 빠르게 검증하고 깊이 있게 완성하여, 전 세계 모바일 게이머들이 매일 열어보고 싶은 독창적인 게임을 만듭니다.',
  missionEn: 'beeorbit builds original, high-retention mobile games through high-velocity prototyping and dedicated craftsmanship.',
  contactEmail: 'tadd@beeorbit.net',
  addressKo: '대한민국 서울특별시 강남구 테헤란로 (beeorbit Studio)',
  addressEn: 'Teheran-ro, Gangnam-gu, Seoul, Republic of Korea',
  stats: [
    { labelKo: '개발 철학', labelEn: 'Philosophy', value: 'Play-First' },
    { labelKo: '프로토타입 주기', labelEn: 'Sprint Speed', value: '4 Months' },
    { labelKo: '타깃 플랫폼', labelEn: 'Core Platform', value: 'Mobile' },
    { labelKo: '전문 장르', labelEn: 'Specialty', value: 'Defense & Strategy' },
  ],
  principles: [
    {
      num: '01',
      titleKo: 'High-Velocity Prototyping',
      subtitleKo: '신속한 아이디어 구체화와 검증',
      descKo: '아이디어를 머릿속에만 두지 않고, 즉시 플레이 가능한 빌드로 빠르게 구현하여 재미의 본질을 직접 검증합니다.',
      descEn: 'We transform creative sparks into playable prototypes at lightning speed, validating fun through immediate hands-on play.',
    },
    {
      num: '02',
      titleKo: 'Player-First Experience',
      subtitleKo: '유저의 손끝에서 시작되는 몰입',
      descKo: '복잡한 조작 대신 모바일 터치에 가장 최적화된 쾌감과 명쾌한 피드백을 전달하여 누구나 쉽게 빠져들 수 있는 환경을 만듭니다.',
      descEn: 'Crafting intuitive touch-first gestures and micro-haptic satisfaction that make players eager to launch our games every day.',
    },
    {
      num: '03',
      titleKo: 'Data-Informed Craft',
      subtitleKo: '감각과 데이터의 균형 잡힌 결합',
      descKo: '게임 기획자의 직관과 인게임 유저 행동 데이터를 면밀히 교차 분석하여 지속적으로 진화하는 라이브 서비스를 운영합니다.',
      descEn: 'Harmonizing creative design instincts with granular user behavioral analytics to power continuously evolving live-ops.',
    },
  ],
};
