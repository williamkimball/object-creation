const kellyEnterprises = Object.create({}, {
    Business: {
        value: "Kelly Enterprises",
        enumerable: true
    },
    Employment_Start: {
        value: "08-01-2017",
        enumerable: true
    },
    Employment_End: {
        value: "5-1-2018",
        enumerable: true
    },
    Likes: {
        value: ["Never doing the same thing twice", "decent pay"],
        enumerable: true
    },
    Dislikes: {
        value: ["very unpredictable hours", "mega micromanagement"],
        enumerable: true
    }
})

const leeUniversity = Object.create({}, {
    Business: {
        value: "Lee University",
        enumerable: true
    },
    Employment_Start: {
        value: "01-01-2017",
        enumerable: true
    },
    Employment_End: {
        value: "5-1-2018",
        enumerable: true
    },
    Likes: {
        value: ["Getting to work for a great school", "working with great ELLs"],
        enumerable: true
    },
    Lislikes: {
        value: ["Low pay"],
        enumerable: true
    }
})

const christianPublishersOutlet = Object.create({}, {
    Business: {
        value: "Christian Publishers Outlet",
        enumerable: true
    },
    Employment_Start: {
        value: "07-01-2014",
        enumerable: true
    },
    Employment_End: {
        value: "1-1-2016",
        enumerable: true
    },
    Likes: {
        value: ["Good friends", "Exposure to lots of great Christian books", "Most customers", "Was always busy and needed"],
        enumerable: true
    },
    Dislikes: {
        value: ["King James Onlyists", "Being responsible for the store without any authority", "Being stuck in the back with online orders"],
        enumerable: true
    }
})

let mkJobOb = (job, start, end, like, dislike) => {
    let obj = Object.create({}, {
        Business: {
            value: job,
            enumerable: true
        },
        Employment_Start: {
            value: start,
            enumerable: true
        },
        Employment_End: {
            value: end,
            enumerable: true
        },
        Likes: {
            value: like,
            enumerable: true
        },
        Dislikes: {
            value: dislike,
            enumerable: true
        }

    })
    return obj;
}
let teachingAssistant = mkJobOb('TA', "01-01-2017", "05-30-2017", ["Freshman students", "Jones' teaching style"], ["Freshman students", "Subjectively grading papers", "Having to fail students"])

let jobs = [teachingAssistant, kellyEnterprises, leeUniversity, christianPublishersOutlet]


for (i = 0; i < jobs.length; i++) {
    let jobArticle = document.createElement("article");
    jobArticle.id = jobs[i].business;

    for (property in jobs[i]) {
        let liRef = document.createElement("p")
        liRef.textContent = `${property}: ${jobs[i][property]}`
        jobArticle.appendChild(liRef);
    }

    document.querySelector("#jobs").appendChild(jobArticle);
}


