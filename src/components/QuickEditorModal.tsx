import React, { useState, useRef } from 'react';
import { SiteContent, defaultSiteContent } from '../data/siteContent';
import { X, Check, RotateCcw, Copy, Edit3, Upload, Image as ImageIcon, Trash2 } from 'lucide-react';
import { DonworryIcon } from './DonworryIcon';

interface QuickEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: SiteContent;
  onUpdateContent: (updated: SiteContent) => void;
}

export const QuickEditorModal: React.FC<QuickEditorModalProps> = ({
  isOpen,
  onClose,
  content,
  onUpdateContent,
}) => {
  const [local, setLocal] = useState<SiteContent>(content);
  const [activeTab, setActiveTab] = useState<'home' | 'info' | 'work' | 'contact'>('work');
  const [copied, setCopied] = useState(false);
  const [savedToast, setSavedToast] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setLocal(content);
  }, [content]);

  if (!isOpen) return null;

  const handleSave = () => {
    onUpdateContent(local);
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2000);
  };

  const handleReset = () => {
    if (window.confirm('모든 문구와 게임 아이콘을 기본값으로 복원하시겠습니까?')) {
      setLocal(defaultSiteContent);
      onUpdateContent(defaultSiteContent);
      setSavedToast(true);
      setTimeout(() => setSavedToast(false), 2000);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(JSON.stringify(local, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle local file image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('이미지 크기는 5MB 이하를 권장합니다.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          const updated = {
            ...local,
            work: {
              ...local.work,
              gameIconUrl: result,
            },
          };
          setLocal(updated);
          onUpdateContent(updated); // Real-time preview!
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveCustomIcon = () => {
    const updated = {
      ...local,
      work: {
        ...local.work,
        gameIconUrl: '',
      },
    };
    setLocal(updated);
    onUpdateContent(updated);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-[#E5DEC9] rounded-sm shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5DEC9] bg-[#FAF8F2]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-[#FF5722]/10 text-[#FF5722] flex items-center justify-center">
              <Edit3 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-display text-[#18181B]">
                실시간 텍스트 &amp; 게임 아이콘 수정기
              </h3>
              <p className="text-[11px] text-[#78716C] font-mono">
                문구 수정 및 내 컴퓨터의 이미지 파일을 업로드해 즉시 교체할 수 있습니다.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#78716C] hover:text-[#18181B] rounded hover:bg-[#EFE9DB] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-[#E5DEC9] bg-[#F9F6EE] px-4 pt-2 gap-2 font-mono text-xs">
          {[
            { id: 'work', label: '🎮 WORK (게임 & 아이콘)' },
            { id: 'home', label: 'HOME (홈)' },
            { id: 'info', label: 'INFO (소개)' },
            { id: 'contact', label: 'CONTACT (이메일)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 font-bold tracking-wider rounded-t-sm transition-colors border-t border-x cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-[#FF5722] border-[#E5DEC9] -mb-px'
                  : 'bg-transparent text-[#78716C] hover:text-[#18181B] border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-[#18181B]">
          {/* TAB: WORK (GAME & ICON) */}
          {activeTab === 'work' && (
            <div className="space-y-6">
              {/* Game Icon Customizer Box */}
              <div className="p-4 bg-[#FAF8F5] border border-[#E5DEC9] rounded-sm space-y-3">
                <span className="font-mono text-[#57534E] font-bold block">
                  🖼️ 게임 아이콘 이미지 수정
                </span>

                <div className="flex flex-col sm:flex-row items-center gap-5">
                  {/* Current Preview */}
                  <div className="relative w-28 h-28 rounded-xl overflow-hidden border border-[#E5DEC9] bg-white shadow-xs shrink-0 flex items-center justify-center">
                    {local.work.gameIconUrl ? (
                      <img
                        src={local.work.gameIconUrl}
                        alt="Game Icon Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <DonworryIcon className="w-full h-full" />
                    )}
                  </div>

                  {/* Upload Controls */}
                  <div className="space-y-2 flex-1 w-full text-xs">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-3.5 py-2 bg-[#FF5722] hover:bg-[#ff6838] text-white font-bold rounded flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>내 PC에서 이미지 파일 업로드</span>
                      </button>

                      {local.work.gameIconUrl && (
                        <button
                          type="button"
                          onClick={handleRemoveCustomIcon}
                          className="px-3 py-2 bg-white hover:bg-[#FAF8F5] border border-[#E5DEC9] text-[#78716C] hover:text-red-500 rounded flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>기본 용사 아이콘으로 복원</span>
                        </button>
                      )}
                    </div>

                    <p className="text-[11px] text-[#78716C]">
                      PNG, JPG, SVG, WebP 파일 지원 (클릭 즉시 화면에 미리보기 적용)
                    </p>

                    {/* Or URL input */}
                    <div className="pt-1">
                      <input
                        type="text"
                        placeholder="또는 이미지 웹 URL 직접 입력 (https://...)"
                        value={local.work.gameIconUrl || ''}
                        onChange={(e) => {
                          const updated = {
                            ...local,
                            work: { ...local.work, gameIconUrl: e.target.value },
                          };
                          setLocal(updated);
                          onUpdateContent(updated);
                        }}
                        className="w-full p-2 bg-white border border-[#E5DEC9] rounded text-[11px] font-mono focus:border-[#FF5722] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Text Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-mono text-[#57534E] font-bold block mb-1">
                    게임 이름
                  </label>
                  <input
                    type="text"
                    value={local.work.gameTitle}
                    onChange={(e) =>
                      setLocal({ ...local, work: { ...local.work, gameTitle: e.target.value } })
                    }
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#E5DEC9] rounded text-sm font-bold focus:border-[#FF5722] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-mono text-[#57534E] font-bold block mb-1">
                    게임 장르
                  </label>
                  <input
                    type="text"
                    value={local.work.gameGenre}
                    onChange={(e) =>
                      setLocal({ ...local, work: { ...local.work, gameGenre: e.target.value } })
                    }
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#E5DEC9] rounded text-xs text-[#FF5722] font-bold focus:border-[#FF5722] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[#57534E] font-bold block mb-1">
                  게임 소개 문구
                </label>
                <textarea
                  rows={3}
                  value={local.work.gameDescription}
                  onChange={(e) =>
                    setLocal({
                      ...local,
                      work: { ...local.work, gameDescription: e.target.value },
                    })
                  }
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E5DEC9] rounded text-xs focus:border-[#FF5722] focus:outline-none leading-relaxed resize-none"
                />
              </div>

              <div>
                <label className="font-mono text-[#57534E] font-bold block mb-1">
                  게임 특징 4가지
                </label>
                <div className="space-y-2">
                  {local.work.features.map((feat, idx) => (
                    <input
                      key={idx}
                      type="text"
                      value={feat}
                      onChange={(e) => {
                        const updated = [...local.work.features];
                        updated[idx] = e.target.value;
                        setLocal({ ...local, work: { ...local.work, features: updated } });
                      }}
                      className="w-full p-2 bg-[#FAF8F5] border border-[#E5DEC9] rounded text-xs"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: HOME */}
          {activeTab === 'home' && (
            <div className="space-y-4">
              <div>
                <label className="font-mono text-[#57534E] font-bold block mb-1">
                  상단 배지 태그
                </label>
                <input
                  type="text"
                  value={local.home.tag}
                  onChange={(e) =>
                    setLocal({ ...local, home: { ...local.home, tag: e.target.value } })
                  }
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E5DEC9] rounded text-xs focus:border-[#FF5722] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-mono text-[#57534E] font-bold block mb-1">
                    메인 타이틀 1줄
                  </label>
                  <input
                    type="text"
                    value={local.home.headlineLine1}
                    onChange={(e) =>
                      setLocal({
                        ...local,
                        home: { ...local.home, headlineLine1: e.target.value },
                      })
                    }
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#E5DEC9] rounded text-xs focus:border-[#FF5722] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-mono text-[#57534E] font-bold block mb-1">
                    메인 타이틀 2줄 (오렌지 강조)
                  </label>
                  <input
                    type="text"
                    value={local.home.headlineHighlight}
                    onChange={(e) =>
                      setLocal({
                        ...local,
                        home: { ...local.home, headlineHighlight: e.target.value },
                      })
                    }
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#E5DEC9] rounded text-xs focus:border-[#FF5722] focus:outline-none text-[#FF5722] font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[#57534E] font-bold block mb-1">
                  홈 소개 문구
                </label>
                <textarea
                  rows={3}
                  value={local.home.description}
                  onChange={(e) =>
                    setLocal({ ...local, home: { ...local.home, description: e.target.value } })
                  }
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E5DEC9] rounded text-xs focus:border-[#FF5722] focus:outline-none leading-relaxed resize-none"
                />
              </div>
            </div>
          )}

          {/* TAB: INFO */}
          {activeTab === 'info' && (
            <div className="space-y-4">
              <div>
                <label className="font-mono text-[#57534E] font-bold block mb-1">
                  INFO 섹션 부제목
                </label>
                <textarea
                  rows={2}
                  value={local.info.subtitle}
                  onChange={(e) =>
                    setLocal({ ...local, info: { ...local.info, subtitle: e.target.value } })
                  }
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E5DEC9] rounded text-xs focus:border-[#FF5722] focus:outline-none resize-none"
                />
              </div>

              <div className="space-y-3 pt-2">
                <span className="font-mono text-[#57534E] font-bold block">
                  3가지 핵심 가치 카드
                </span>
                {local.info.cards.map((card, idx) => (
                  <div key={idx} className="p-3 bg-[#FAF8F5] border border-[#E5DEC9] rounded space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[#FF5722] font-bold">{card.num}</span>
                      <input
                        type="text"
                        value={card.title}
                        onChange={(e) => {
                          const updated = [...local.info.cards];
                          updated[idx].title = e.target.value;
                          setLocal({ ...local, info: { ...local.info, cards: updated } });
                        }}
                        className="flex-1 p-1.5 bg-white border border-[#E5DEC9] rounded text-xs font-bold"
                      />
                    </div>
                    <textarea
                      rows={2}
                      value={card.desc}
                      onChange={(e) => {
                        const updated = [...local.info.cards];
                        updated[idx].desc = e.target.value;
                        setLocal({ ...local, info: { ...local.info, cards: updated } });
                      }}
                      className="w-full p-1.5 bg-white border border-[#E5DEC9] rounded text-xs leading-normal resize-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div>
                <label className="font-mono text-[#57534E] font-bold block mb-1">
                  대표 수신 이메일
                </label>
                <input
                  type="email"
                  value={local.contact.email}
                  onChange={(e) =>
                    setLocal({ ...local, contact: { ...local.contact, email: e.target.value } })
                  }
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E5DEC9] rounded text-sm font-mono font-bold text-[#FF5722] focus:border-[#FF5722] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-mono text-[#57534E] font-bold block mb-1">
                  소개 문구
                </label>
                <textarea
                  rows={3}
                  value={local.contact.description}
                  onChange={(e) =>
                    setLocal({
                      ...local,
                      contact: { ...local.contact, description: e.target.value },
                    })
                  }
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#E5DEC9] rounded text-xs focus:border-[#FF5722] focus:outline-none leading-relaxed resize-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 border-t border-[#E5DEC9] bg-[#FAF8F2] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="px-3 py-1.5 text-[#78716C] hover:text-[#18181B] bg-white border border-[#E5DEC9] rounded flex items-center gap-1 font-mono cursor-pointer"
              title="초기 상태로 되돌리기"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>초기값 복원</span>
            </button>

            <button
              onClick={handleCopyCode}
              className="px-3 py-1.5 text-[#78716C] hover:text-[#18181B] bg-white border border-[#E5DEC9] rounded flex items-center gap-1 font-mono cursor-pointer"
              title="JSON 코드로 복사"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? '복사됨!' : 'JSON 복사'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-[#78716C] hover:text-[#18181B] cursor-pointer"
            >
              닫기
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 font-bold uppercase tracking-wider text-white bg-[#FF5722] hover:bg-[#ff6838] rounded flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Check className="w-4 h-4" />
              <span>{savedToast ? '저장되었습니다!' : '화면에 즉시 반영'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
