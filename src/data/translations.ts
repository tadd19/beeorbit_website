export type Language = 'ko' | 'en' | 'ja';

export interface SiteTranslation {
  nav: {
    home: string;
    info: string;
    work: string;
    contact: string;
  };
  home: {
    tag: string;
    headlineLine1: string;
    headlineHighlight: string;
    description: string;
    ctaWork: string;
    ctaContact: string;
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
    platformLabel: string;
    platform: string;
    developerLabel: string;
    developer: string;
    changeIconBtn: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    inboxLabel: string;
    email: string;
    description: string;
    copyBtn: string;
    copiedBtn: string;
    sendBtn: string;
  };
  footer: {
    tagline: string;
    rights: string;
    company: string;
  };
  editor: {
    editBtn: string;
    title: string;
    subtitle: string;
  };
}

export const translations: Record<Language, SiteTranslation> = {
  ko: {
    nav: {
      home: 'HOME',
      info: 'INFO',
      work: 'WORK',
      contact: 'CONTACT',
    },
    home: {
      tag: 'MOBILE GAME STUDIO',
      headlineLine1: '재미의 새로운',
      headlineHighlight: '궤도를 그립니다.',
      description:
        'beeorbit(비오빗)은 일상에 기분 좋은 즐거움을 더하는 모바일 게임을 만듭니다. 부담 없이 즐길 수 있는 직관적인 재미와 깊이 있는 몰입을 지향합니다.',
      ctaWork: '게임 보기 (WORK)',
      ctaContact: '문의하기 (CONTACT)',
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
      platformLabel: 'PLATFORM',
      platform: 'Google Play & App Store',
      developerLabel: 'DEVELOPER',
      developer: 'beeorbit',
      changeIconBtn: '아이콘 변경',
    },
    contact: {
      tag: '03. GET IN TOUCH',
      title: 'CONTACT',
      subtitle: 'beeorbit과의 비즈니스 제휴, 퍼블리싱, 투자 및 기타 모든 문의를 환영합니다.',
      inboxLabel: 'OFFICIAL CONTACT EMAIL',
      email: 'tadd@beeorbit.net',
      description: '보내주신 제안과 문의는 소중히 검토 후 빠른 시일 내에 회신드리겠습니다.',
      copyBtn: '이메일 주소 복사',
      copiedBtn: '복사 완료',
      sendBtn: '이메일 보내기',
    },
    footer: {
      tagline: '재미의 새로운 궤도를 그리는 모바일 게임 스튜디오',
      rights: 'beeorbit. All rights reserved.',
      company: '주식회사 비오빗 (beeorbit)',
    },
    editor: {
      editBtn: '문구 직접 수정',
      title: '실시간 텍스트 & 게임 아이콘 수정기',
      subtitle: '문구 수정 및 내 컴퓨터의 이미지 파일을 업로드해 즉시 교체할 수 있습니다.',
    },
  },
  en: {
    nav: {
      home: 'HOME',
      info: 'INFO',
      work: 'WORK',
      contact: 'CONTACT',
    },
    home: {
      tag: 'MOBILE GAME STUDIO',
      headlineLine1: 'Drawing New',
      headlineHighlight: 'Orbits of Fun.',
      description:
        'beeorbit crafts mobile games that bring delightful joy to everyday life. We pursue effortless, intuitive fun paired with deep, immersive gameplay.',
      ctaWork: 'Explore Games (WORK)',
      ctaContact: 'Get in Touch (CONTACT)',
    },
    info: {
      tag: '01. ABOUT',
      title: 'INFO',
      subtitle:
        'beeorbit is an indie studio dedicated to researching and developing accessible, deeply engaging casual and idle mobile games.',
      cards: [
        {
          num: '01',
          title: 'Stress-Free Play',
          desc: 'We create games where players can feel the rewarding joy of progression simply by keeping the game open, free from stress.',
        },
        {
          num: '02',
          title: 'Tactile Feedback',
          desc: 'Even with simple rules, we meticulously polish crisp hit feedback, vibrant visual effects, and charming controls.',
        },
        {
          num: '03',
          title: 'Community-Driven',
          desc: 'Listening closely to player feedback, we deliver consistent content updates and balance refinements for lasting live-ops.',
        },
      ],
    },
    work: {
      tag: '02. WORK',
      title: 'GAMES',
      subtitle: 'Discover the mobile game titles crafted with passion by beeorbit.',
      gameTitle: 'Donworry',
      gameGenre: 'Casual Idle RPG',
      gameGenreEn: 'Casual Idle RPG',
      gameDescription:
        'An effortless idle adventure with a charming hero! Watch your warrior grow effortlessly with zero stress while blasting through swarms of monsters in this healing casual RPG.',
      features: [
        'Adorable character design with exhilarating action feedback',
        'Always-on automatic farming & infinite gear progression',
        'Intuitive, stress-free skill synergy combinations',
        'Diverse adventure stages and thrilling boss raids',
      ],
      platformLabel: 'PLATFORM',
      platform: 'Google Play & App Store',
      developerLabel: 'DEVELOPER',
      developer: 'beeorbit',
      changeIconBtn: 'Change Icon',
    },
    contact: {
      tag: '03. GET IN TOUCH',
      title: 'CONTACT',
      subtitle: 'We welcome all business partnerships, publishing inquiries, investments, and collaborations with beeorbit.',
      inboxLabel: 'OFFICIAL CONTACT EMAIL',
      email: 'tadd@beeorbit.net',
      description: 'Every inquiry is carefully reviewed, and we will get back to you promptly.',
      copyBtn: 'Copy Email Address',
      copiedBtn: 'Copied!',
      sendBtn: 'Send Email',
    },
    footer: {
      tagline: 'Mobile Game Studio Drawing New Orbits of Fun',
      rights: 'beeorbit. All rights reserved.',
      company: 'beeorbit Co., Ltd.',
    },
    editor: {
      editBtn: 'Edit Content',
      title: 'Live Content & Icon Editor',
      subtitle: 'Modify texts or upload your own icon image to update the site in real time.',
    },
  },
  ja: {
    nav: {
      home: 'HOME',
      info: 'INFO',
      work: 'WORK',
      contact: 'CONTACT',
    },
    home: {
      tag: 'MOBILE GAME STUDIO',
      headlineLine1: '楽しさの新たな',
      headlineHighlight: '軌道を描く。',
      description:
        'beeorbit（ビーオービット）は、日常に心地よい楽しさを届けるモバイルゲームを創り出します。気軽に楽しめる直感的な面白さと、深い没入感を追求しています。',
      ctaWork: '作品を見る (WORK)',
      ctaContact: 'お問い合わせ (CONTACT)',
    },
    info: {
      tag: '01. ABOUT',
      title: 'INFO',
      subtitle:
        'beeorbitは、誰もが気軽に楽しめるカジュアル＆放置系モバイルゲームを研究・開発するインディーズスタジオです。',
      cards: [
        {
          num: '01',
          title: '癒やしの放置プレイ',
          desc: '忙しい日常の中でも、起動しておくだけで心地よい成長の喜びを実感できるゲームを作ります。',
        },
        {
          num: '02',
          title: '爽快な手応えと演出',
          desc: 'シンプルなルールの中にも、爽快な打撃感や鮮やかなエフェクト、愛らしい操作感を徹底的に磨き上げます。',
        },
        {
          num: '03',
          title: 'ユーザーと共に歩む成長',
          desc: 'プレイヤーの皆様の声に耳を傾け、定期的なコンテンツ更新とバランス調整で長く愛されるサービスを提供します。',
        },
      ],
    },
    work: {
      tag: '02. WORK',
      title: 'GAMES',
      subtitle: 'beeorbitが真心を込めて開発したモバイルゲームタイトルをご紹介します。',
      gameTitle: 'ドンウォーリー',
      gameGenre: 'カジュアル放置系RPG',
      gameGenreEn: 'Casual Idle RPG',
      gameDescription:
        'かわいい勇者と一緒に旅立つ、気軽に楽しめる放置系大冒険！複雑な操作は不要、眺めているだけでぐんぐん成長し、爽快にモンスターをなぎ倒す癒やしのカジュアルRPGです。',
      features: [
        '愛らしいキャラクターと爽快感あふれるアクションの手応え',
        '安心の自動ファーミング＆無限の装備成長',
        'ストレスのない直感的なスキル組み合わせシステム',
        '多彩なステージと個性豊かなボスレイド',
      ],
      platformLabel: 'PLATFORM',
      platform: 'Google Play & App Store',
      developerLabel: 'DEVELOPER',
      developer: 'beeorbit',
      changeIconBtn: 'アイコン変更',
    },
    contact: {
      tag: '03. GET IN TOUCH',
      title: 'CONTACT',
      subtitle: 'beeorbitとのビジネス提携、パブリッシング、投資、その他各種お問い合わせを心よりお待ちしております。',
      inboxLabel: 'OFFICIAL CONTACT EMAIL',
      email: 'tadd@beeorbit.net',
      description: 'いただいたご提案やお問い合わせは大切に検討し、迅速にご返信いたします。',
      copyBtn: 'メールアドレスをコピー',
      copiedBtn: 'コピー完了',
      sendBtn: 'メールを送る',
    },
    footer: {
      tagline: '楽しさの新たな軌道を描くモバイルゲームスタジオ',
      rights: 'beeorbit. All rights reserved.',
      company: '株式会社ビーオービット (beeorbit)',
    },
    editor: {
      editBtn: 'テキスト直接編集',
      title: 'リアルタイム編集ツール',
      subtitle: 'テキストの変更やPCからの画像アップロードでアイコンを即座に差し替えできます。',
    },
  },
};
