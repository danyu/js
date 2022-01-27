const endorsement = [
  { skill: "sql", user: "user5" },
  { skill: "js", user: "user2" },
  { skill: "css", user: "user1" },
  { skill: "css", user: "user2" },
  { skill: "css", user: "user3" },
  { skill: "html", user: "user2" },
  { skill: "js", user: "user4" },
];

function count_v1(d) {
  // {cnt: {[skillName]:[list of users]}}
  const track = d.reduce(
    (acc, { skill, user }) => ({
      ...acc,
      [skill]: [...(acc[skill] || []), user],
    }),
    {}
  );

  const ary = Object.keys(track).map((skill) => ({
    skill,
    users: track[skill],
    count: track[skill].length,
  }));

  ary.sort((s1, s2) => s2.count - s1.count);
  return ary;
}

function count_v2(d) {
  // {cnt: {[skillName]:[list of users]}}
  const track = {};

  Object.keys(endorsement).forEach(({ skill, user }) => {});
}

console.log(count_v1(endorsement));
