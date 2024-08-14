import {
  JobPostList,
  ShootManageList,
  ShootManageSelectStatus,
} from "@api/interface";

/**
 * JobPost 공고 전체 조회
 * - 캘린더/ 리스트 공고 조회
 */
export const dummyJobPostList: JobPostList = [
  {
    id: 1,
    title: "Prosacco Group",
    gatheringLocation: "Tetandara",
    gatheringTime: "2023-11-10T21:53:40",
    imageUrl: "",
    status: true,
    hourPay: 1,
    category: "COMEDY",
    companyName: "company",
    scheduleIdList: [0], //? 무슨 값인지 백에서 확인
    calenderList: ["2024-08-14"],
    roleIdList: [20, 40, 60, 80, 100],
    roleNameList: ["role1", "role2", "role3", "role4", "role5"],
    costumeList: [
      ["pants", "blouse"],
      ["coat", "skirt"],
      ["coat", "skirt"],
      ["coat", "skirt"],
      ["coat", "skirt"],
    ],
    sexList: [false, false, false, false, false],
    roleAgeList: [
      ["만 21세 ~ 만 22세"],
      ["만 21세 ~ 만 22세"],
      ["만 21세 ~ 만 22세"],
      ["만 21세 ~ 만 22세"],
      ["만 21세 ~ 만 22세"],
    ],
    limitPersonnelList: [8, 4, 0, 8, 4],
    currentPersonnelList: [0, 0, 0, 0, 0],
    seasonList: ["SPRING", "SPRING", "SPRING", "SPRING", "SPRING"],
    checkTattooList: [true, true, false, false, false],
  },
  {
    id: 2,
    title: "한여름의 코미디",
    gatheringLocation: "서울 강남구",
    gatheringTime: "2024-08-20T10:00:00",
    imageUrl: "",
    status: true,
    hourPay: 20000,
    category: "코미디",
    companyName: "코미디 스튜디오",
    scheduleIdList: [],
    calenderList: ["2024-08-20"],
    roleIdList: [10, 20, 30, 40, 50],
    roleNameList: ["주연1", "주연2", "조연1", "조연2", "엑스트라"],
    costumeList: [
      ["반팔 티셔츠", "청바지"],
      ["셔츠", "면바지"],
      ["드레스", "힐"],
      ["코트", "치마"],
      ["반팔", "반바지"],
    ],
    sexList: [true, false, true, false, true],
    roleAgeList: [
      ["만 25세 ~ 만 30세"],
      ["만 25세 ~ 만 30세"],
      ["만 20세 ~ 만 25세"],
      ["만 20세 ~ 만 25세"],
      ["만 18세 ~ 만 20세"],
    ],
    limitPersonnelList: [1, 1, 1, 1, 5],
    currentPersonnelList: [0, 0, 0, 0, 0],
    seasonList: ["여름", "여름", "여름", "여름", "여름"],
    checkTattooList: [false, false, true, true, false],
  },
  {
    id: 3,
    title: "프론트 화이팅..",
    gatheringLocation: "서울 강남구",
    gatheringTime: "2024-08-20T10:00:00",
    imageUrl: "",
    status: true,
    hourPay: 20000,
    category: "코미디",
    companyName: "코미디 스튜디오",
    scheduleIdList: [],
    calenderList: ["2024-08-20"],
    roleIdList: [10, 20, 30, 40, 50],
    roleNameList: ["주연1", "주연2", "조연1", "조연2", "엑스트라"],
    costumeList: [
      ["반팔 티셔츠", "청바지"],
      ["셔츠", "면바지"],
      ["드레스", "힐"],
      ["코트", "치마"],
      ["반팔", "반바지"],
    ],
    sexList: [true, false, true, false, true],
    roleAgeList: [
      ["만 25세 ~ 만 30세"],
      ["만 25세 ~ 만 30세"],
      ["만 20세 ~ 만 25세"],
      ["만 20세 ~ 만 25세"],
      ["만 18세 ~ 만 20세"],
    ],
    limitPersonnelList: [1, 1, 1, 1, 5],
    currentPersonnelList: [0, 0, 0, 0, 0],
    seasonList: ["여름", "여름", "여름", "여름", "여름"],
    checkTattooList: [false, false, true, true, false],
  },
  {
    id: 4,
    title: "엑스트라 화이팅..",
    gatheringLocation: "부산 해운대구",
    gatheringTime: "2024-12-15T14:30:00",
    imageUrl: "",
    status: true,
    hourPay: 25000,
    category: "멜로",
    companyName: "멜로 스튜디오",
    scheduleIdList: [],
    calenderList: ["2024-08-30"],
    roleIdList: [100, 200, 300, 400, 500],
    roleNameList: ["주인공1", "주인공2", "조연1", "조연2", "엑스트라"],
    costumeList: [
      ["롱코트", "목도리"],
      ["패딩", "청바지"],
      ["가디건", "치마"],
      ["재킷", "면바지"],
      ["스웨터", "청바지"],
    ],
    sexList: [false, false, true, true, false],
    roleAgeList: [
      ["만 27세 ~ 만 32세"], // ? 백과 형식 논의해보야함
      ["만 27세 ~ 만 32세"],
      ["만 22세 ~ 만 27세"],
      ["만 22세 ~ 만 27세"],
      ["만 18세 ~ 만 22세"],
    ],
    limitPersonnelList: [1, 1, 2, 2, 10],
    currentPersonnelList: [0, 0, 0, 0, 0],
    seasonList: ["겨울", "겨울", "겨울", "겨울", "겨울"],
    checkTattooList: [true, true, false, false, false],
  },
];

/**
 * 촬영관리 역할 조회
 * - 전체조회/지원상태별 조회
 */

export const dummyShootManageList: ShootManageList = [
  {
    id: 1,
    category: "드라마",
    title: "UMC1",
    gatheringTime: "2024-01-06T00:29:55",
    gatheringLocation: "강남역",
    name: "UMC1",
    applyStatus: ShootManageSelectStatus.APPLIED,
  },
  {
    id: 2,
    category: "영화",
    title: "UMC2",
    gatheringTime: "2024-01-07T00:29:55",
    gatheringLocation: "신논현역",
    name: "UMC2",
    applyStatus: ShootManageSelectStatus.REJECTED,
  },
  {
    id: 3,
    category: "영화",
    title: "UMC3",
    gatheringTime: "2024-01-08T00:29:55",
    gatheringLocation: "고속 터미널역",
    name: "UMC3",
    applyStatus: ShootManageSelectStatus.APPROVED,
  },
  {
    id: 4,
    category: "드라마",
    title: "UMC4",
    gatheringTime: "2024-01-08T00:29:55",
    gatheringLocation: "고속 터미널역",
    name: "UMC4",
    applyStatus: ShootManageSelectStatus.REJECTED,
  },
  {
    id: 5,
    category: "영화",
    title: "UMC5",
    gatheringTime: "2024-01-08T00:29:55",
    gatheringLocation: "고속 터미널역",
    name: "UMC5",
    applyStatus: ShootManageSelectStatus.APPLIED,
  },
];
