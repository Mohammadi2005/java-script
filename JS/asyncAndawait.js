// sync
function SyncFunc() {
    return "this is a Sync Function";
}

// async
async function AsyncFunc() {
    return "this is a Async Function";
}

console.log(SyncFunc());
console.log(AsyncFunc());

/////////////////////////////////////////////////////

const hasmeeting = false;
const meeting = new Promise((resolve, reject) => {

    const meetingDetails = {
        name: "CodeYad meeting",
        location: "Tehran",
        time: "1:00 PM",
    };

    if (!hasmeeting) {
        resolve(meetingDetails);
    }
    else {
        reject(new Error("meeting Canceled..."));
    }

});

const addToCalender = meetingDetails => {

    const calender = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
    return Promise.resolve(calender);
}

// meeting
//     .then(addToCalender)
//     .then((res) => console.log(res))
//     .catch((rej) => console.log(rej));

async function myMeeting() {
    const meetingDetails = await meeting;
    const message = await addToCalender(meetingDetails);
    console.log(message);
}
myMeeting();
