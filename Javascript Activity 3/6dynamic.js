var record = [
    {
        "Name": "Gibo",
        "Age": 16,
        "SkillSet": [
            { "Skill": "SAP UI5" },
            { "Skill": "SAP HANA" }
        ]
    },
    {
        "Name": "Patrick",
        "Age": 22,
        "SkillSet": [ // fixed spelling here
            { "Skill": "SAP UI5" },
            { "Skill": "SAP HANA" },
            { "Skill": "SAP ABAP" }
        ]
    },
    {
        "Name": "MJ",
        "Age": 24,
        "SkillSet": [
            { "Skill": "SAP HANA" }
        ]
    }
];

var maxSkills = 0;
var topPerson = null;

for (let i = 0; i < record.length; i++) {
    let currentSkills = record[i].SkillSet.length;

    if (currentSkills > maxSkills) {
        maxSkills = currentSkills;
        topPerson = record[i]; // fixed typo here
    }
}

console.log("Name:", topPerson.Name);
console.log("Age:", topPerson.Age);