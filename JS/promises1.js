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

meeting
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));

