export const DROPS = [
  {
    image: process.env.PUBLIC_URL + "/assets/vitalik.png",
    name: "Vitalik",
    handle: "username1",
    current_bid: 1238.11,
    ending_in: +new Date() + 200000,
  },
  {
    image: process.env.PUBLIC_URL + "/assets/shadow.png",
    name: "Shadow Moses",
    handle: "username2",
    current_bid: 3238.14,
    ending_in: +new Date() + 700000,
  },
  {
    image: process.env.PUBLIC_URL + "/assets/supper.png",
    name: "Supper",
    handle: "username3",
    current_bid: 4238.21,
    ending_in: +new Date() + 1200000,
  },
  {
    image: process.env.PUBLIC_URL + "/assets/palm_spring.png",
    name: "Palm Springs",
    handle: "username4",
    current_bid: 3198.76,
    ending_in: +new Date() + 900000,
  },
  {
    image: process.env.PUBLIC_URL + "/assets/saturn.png",
    name: "Saturn Dusk",
    handle: "username5",
    current_bid: 5293.98,
    ending_in: +new Date() + 100000,
  },
];

export const getMockDrops = (size = 24) =>
  [...new Array(size)].map((_, i) => DROPS[i % DROPS.length]);

export const MOCK_USER = {
  id: "salmaan.a.qadir@gmail.com",
  name: "Sal Qadir",
  image: process.env.PUBLIC_URL + "/assets/sal.png",
};
