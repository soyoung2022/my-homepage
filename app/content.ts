export type NavLink = {
  href: string;
  label: string;
};

export type ResearchTopic = {
  index: string;
  title: string;
  question: string;
};

export type ResearchNote = {
  title: string;
};

export type ExploringQuestion = {
  id: string;
  text: string;
};

export type BeyondCategory = {
  id: string;
  title: string;
  description: string;
  art: "travel" | "objects" | "interiors" | "organization";
};

export type ArchiveNote = {
  category: "Research" | "Travel" | "Objects" | "Interiors" | "Organization";
  title: string;
};

export const site = {
  label: "AI Research & Everyday Archive",
  headline: "AI, 아이디어, 그리고 일상의 작은 것들을 탐구합니다.",
  intro:
    "인공지능 연구에 대한 생각과 질문, 그리고 연구 밖에서 좋아하는 것들을 기록하는 작은 공간입니다.",
  footer: "Notes on AI, research, and everyday interests.",
};

export const navLinks: NavLink[] = [
  { href: "#research", label: "Research" },
  { href: "#notes", label: "Notes" },
  { href: "#beyond-research", label: "Beyond Research" },
  { href: "#about", label: "About" },
];

export const researchIntro =
  "AI 시스템이 지식을 어떻게 표현하고 저장하며, 수정하고 잊는지에 관심이 있습니다. 이 공간에는 현대 AI 시스템과 관련된 연구 아이디어, 논문, 개념, 질문들을 기록합니다.";

export const researchTopics: ResearchTopic[] = [
  {
    index: "01",
    title: "Machine Unlearning",
    question: "전체 모델을 다시 학습하지 않고 특정 정보를 선택적으로 잊게 할 수 있을까?",
  },
  {
    index: "02",
    title: "Knowledge Representation",
    question:
      "AI 모델 안팎에서 지식이 어떻게 저장되고 접근되며 제어되는지 탐구합니다.",
  },
  {
    index: "03",
    title: "Large Language Models",
    question: "언어 모델의 추론, 기억, 검색, 지식 제어 구조를 살펴봅니다.",
  },
  {
    index: "04",
    title: "AI Systems",
    question:
      "모델, 외부 메모리, 검색 시스템, 에이전트, 제어 레이어 사이의 구조에 관심이 있습니다.",
  },
];

export const researchNotes: ResearchNote[] = [
  { title: "지식과 추론을 분리할 수 있을까" },
  { title: "언어 모델을 위한 외부 메모리" },
  { title: "Machine Unlearning 다시 생각하기" },
  { title: "Retrieval, Memory, Model Knowledge" },
];

export const exploringQuestions: ExploringQuestion[] = [
  { id: "q1", text: "모델의 지식을 파라미터 밖에서 관리할 수 있을까?" },
  {
    id: "q2",
    text: "모델이 정말 특정 정보를 잊었다는 것을 어떻게 평가할 수 있을까?",
  },
  {
    id: "q3",
    text: "외부 메모리를 활용하면 AI 시스템을 더 쉽게 수정하고 제어할 수 있을까?",
  },
  {
    id: "q4",
    text: "모델의 추론 능력과 저장된 지식 사이의 경계는 어디에 있어야 할까?",
  },
];

export const beyondIntro =
  "AI 연구 외에도 관찰하고, 모으고, 기록하는 것을 좋아합니다.";

export const beyondCategories: BeyondCategory[] = [
  {
    id: "travel",
    title: "Travel",
    description: "여행지에서 발견한 장소와 작은 기록들",
    art: "travel",
  },
  {
    id: "objects",
    title: "Objects",
    description: "문구, 소품, 그리고 잘 만들어진 물건들",
    art: "objects",
  },
  {
    id: "interiors",
    title: "Interiors",
    description: "차분한 공간, 가구, 소재와 분위기",
    art: "interiors",
  },
  {
    id: "organization",
    title: "Organization",
    description: "공간과 물건을 단순하게 정리하는 방법",
    art: "organization",
  },
];

export const archiveNotes: ArchiveNote[] = [
  { category: "Research", title: "외부 메모리 구조에 대한 생각" },
  { category: "Travel", title: "어딘가에서 보낸 조용한 주말" },
  { category: "Objects", title: "오래 두고 싶은 작은 물건들" },
  { category: "Interiors", title: "생각하기 좋은 공간" },
  { category: "Organization", title: "일상을 조금 더 단순하게 만드는 방법" },
];

export const aboutText =
  "이곳은 연구 아이디어와 질문, 그리고 일상의 관심사를 기록하는 작은 개인 아카이브입니다. 주요 관심사는 인공지능과 머신러닝이며, 가끔 여행, 소품, 인테리어, 정리에 관한 기록도 남깁니다.";
