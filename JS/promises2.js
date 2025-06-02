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

meeting
    .then(addToCalender)
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));



